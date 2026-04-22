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
            // 根据语音名称判断性别
            const name = v.name.toLowerCase();
            let gender: 'male' | 'female' = 'female';

            // 常见男声关键词
            const maleKeywords = ['male', 'man', 'david', 'james', 'john', 'mark', 'steve', 'daniel', 'richard', 'george', 'michael'];
            // 常见女声关键词
            const femaleKeywords = ['female', 'woman', 'susan', 'jenny', 'emily', 'samantha', 'victoria', 'zira', 'hazel', 'aria', 'sara'];

            if (maleKeywords.some(kw => name.includes(kw))) {
              gender = 'male';
            } else if (femaleKeywords.some(kw => name.includes(kw))) {
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

    // 选择语音
    if (voiceSettings.voiceURI) {
      const selectedVoice = voices.find(v => v.voiceURI === voiceSettings.voiceURI);
      if (selectedVoice) {
        utterance.voice = selectedVoice;
      }
    } else {
      // 根据性别选择默认语音
      const genderVoices = voices.filter(v => v.lang.startsWith('en'));

      let filteredVoices: SpeechSynthesisVoice[] = [];

      if (voiceSettings.voiceGender === 'male') {
        // 男声：匹配男性关键词
        filteredVoices = genderVoices.filter(v => {
          const name = v.name.toLowerCase();
          return name.includes('male') || name.includes('man') || name.includes('david') || name.includes('james') || name.includes('john') || name.includes('mark') || name.includes('daniel') || name.includes('steve') || name.includes('richard') || name.includes('george') || name.includes('michael');
        });
      } else {
        // 女声：匹配女性关键词
        filteredVoices = genderVoices.filter(v => {
          const name = v.name.toLowerCase();
          return name.includes('female') || name.includes('woman') || name.includes('susan') || name.includes('jenny') || name.includes('emily') || name.includes('samantha') || name.includes('victoria') || name.includes('zira') || name.includes('hazel') || name.includes('aria') || name.includes('sara');
        });
      }

      if (filteredVoices.length > 0) {
        utterance.voice = filteredVoices[0];
      } else if (genderVoices.length > 0) {
        utterance.voice = genderVoices[0];
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
  }, [voices, voiceSettings]);

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
