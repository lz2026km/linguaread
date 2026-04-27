import { useState, useEffect, useCallback } from 'react';
import { VoiceOption } from '../types';
import { getVoiceSettings, saveVoiceSettings, defaultVoiceSettings } from '../utils/storage';

export const useSpeechSynthesis = () => {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [availableVoices, setAvailableVoices] = useState<VoiceOption[]>([]);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voiceSettings, setVoiceSettings] = useState(defaultVoiceSettings);

  // 加载语音列表
  useEffect(() => {
    const loadVoices = () => {
      if ('speechSynthesis' in window) {
        const voiceList = window.speechSynthesis.getVoices();
        setVoices(voiceList);

        // 过滤出英文语音
        const englishVoices: VoiceOption[] = voiceList
          .filter(v => v.lang.startsWith('en'))
          .map(v => {
            // 根据语音名称判断性别（精确匹配避免子串误匹配）
            const nameLower = v.name.toLowerCase();
            const nameWords = nameLower.split(/\s+/);
            // 常见男声关键词（独立词）
            const maleKeywords = ['male', 'man', 'david', 'james', 'john', 'mark', 'steve', 'daniel', 'richard', 'george', 'michael'];
            // 常见女声关键词（独立词）
            const femaleKeywords = ['female', 'woman', 'susan', 'jenny', 'emily', 'samantha', 'victoria', 'zira', 'hazel', 'aria', 'sara'];

            let gender: 'male' | 'female' = 'female';
            if (nameWords.some(w => maleKeywords.includes(w)) || nameLower.includes(' male') || nameLower.includes('_male')) {
              gender = 'male';
            } else if (nameWords.some(w => femaleKeywords.includes(w)) || nameLower.includes(' female') || nameLower.includes('_female')) {
              gender = 'female';
            }

            return {
              name: v.name,
              voiceURI: v.voiceURI,
              gender,
              lang: v.lang,
            };
          });

        setAvailableVoices(englishVoices);
      }
    };

    loadVoices();

    // 某些浏览器需要等待voiceschanged事件
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }

    // 加载保存的设置
    const savedSettings = getVoiceSettings();
    setVoiceSettings(savedSettings);
  }, []);

  // 播放语音
  const speak = useCallback((text: string, onEnd?: () => void) => {
    if (!('speechSynthesis' in window)) {
      console.warn('Speech synthesis not supported');
      return;
    }

    // 停止当前播放
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';

    // 应用设置
    utterance.rate = voiceSettings.speechRate;

    // 每次播放时都实时获取语音列表（避免 voices 状态滞后问题）
    const allVoices = window.speechSynthesis.getVoices();

    // 根据名称判断性别的辅助函数（使用精确匹配避免子串误匹配，如 "female" 包含 "male"）
    const detectGender = (name: string): 'male' | 'female' => {
      const lower = name.toLowerCase();
      // 用空格分隔单词后精确匹配，避免 "female" 被 "male" 误匹配
      const words = lower.split(/\s+/);
      const maleKeywords = ['male', 'man', 'david', 'james', 'john', 'mark', 'steve', 'daniel', 'richard', 'george', 'michael'];
      const femaleKeywords = ['female', 'woman', 'susan', 'jenny', 'emily', 'samantha', 'victoria', 'zira', 'hazel', 'aria', 'sara'];
      // 精确匹配：单词等于关键词，或名称包含 "male"/"female" 作为独立词
      if (words.some(w => maleKeywords.includes(w)) || lower.includes(' male') || lower.includes('_male')) {
        return 'male';
      }
      if (words.some(w => femaleKeywords.includes(w)) || lower.includes(' female') || lower.includes('_female')) {
        return 'female';
      }
      return 'female'; // 无法判断时默认女声
    };

    // 过滤英文语音
    const englishVoices = allVoices.filter(v => v.lang.startsWith('en'));

    if (voiceSettings.voiceURI) {
      // 优先使用用户明确选择的语音（URI 精确匹配）
      const selected = englishVoices.find(v => v.voiceURI === voiceSettings.voiceURI);
      if (selected) utterance.voice = selected;
    } else {
      // 按性别选择
      const targetGender = voiceSettings.voiceGender;
      // 先尝试找名称含 gender 标签的语音（如 Google UK English Male/Female）
      const genderByName = englishVoices.filter(v => detectGender(v.name) === targetGender);
      if (genderByName.length > 0) {
        utterance.voice = genderByName[0];
      } else {
        // 降级：同语言任意语音
        if (englishVoices.length > 0) {
          utterance.voice = englishVoices[0];
        }
      }
    }

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => {
      setIsSpeaking(false);
      onEnd?.();
    };
    utterance.onerror = () => {
      setIsSpeaking(false);
      onEnd?.();
    };

    window.speechSynthesis.speak(utterance);
  }, [voiceSettings]);

  // 停止播放
  const stop = useCallback(() => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  }, []);

  // 更新语音设置
  const updateVoiceSettings = useCallback((newSettings: Partial<typeof voiceSettings>) => {
    const updated = { ...voiceSettings, ...newSettings };
    setVoiceSettings(updated);
    saveVoiceSettings(updated);
  }, [voiceSettings]);

  return {
    voices: availableVoices,
    isSpeaking,
    speak,
    stop,
    voiceSettings,
    updateVoiceSettings,
  };
};
