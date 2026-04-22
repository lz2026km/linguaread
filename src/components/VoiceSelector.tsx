import React from 'react';
import { Volume2, User, Settings } from 'lucide-react';
import { useSpeechSynthesis } from '../hooks/useSpeechSynthesis';

interface VoiceSelectorProps {
  onTestVoice?: () => void;
}

const VoiceSelector: React.FC<VoiceSelectorProps> = ({ onTestVoice }) => {
  const { voices, voiceSettings, updateVoiceSettings, speak } = useSpeechSynthesis();

  // 测试当前选择的语音
  const handleTestVoice = () => {
    speak('Hello, this is a test.', onTestVoice);
  };

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100">
      <div className="flex items-center mb-4">
        <Volume2 className="w-5 h-5 text-indigo-600 mr-2" />
        <h3 className="text-lg font-semibold text-gray-800">语音设置</h3>
      </div>

      {/* 语音性别选择 */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          <User className="w-4 h-4 inline mr-1" />
          语音类型
        </label>
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => updateVoiceSettings({ voiceGender: 'female' })}
            className={`p-3 rounded-xl border-2 transition-all flex items-center justify-center space-x-2 ${
              voiceSettings.voiceGender === 'female'
                ? 'border-pink-500 bg-pink-50 text-pink-700'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <span className="text-2xl">👩</span>
            <span className="font-medium">女声</span>
          </button>
          <button
            onClick={() => updateVoiceSettings({ voiceGender: 'male' })}
            className={`p-3 rounded-xl border-2 transition-all flex items-center justify-center space-x-2 ${
              voiceSettings.voiceGender === 'male'
                ? 'border-blue-500 bg-blue-50 text-blue-700'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <span className="text-2xl">👨</span>
            <span className="font-medium">男声</span>
          </button>
        </div>
      </div>

      {/* 语音选择 */}
      {voices.length > 0 && (
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Settings className="w-4 h-4 inline mr-1" />
            选择具体语音
          </label>
          <select
            value={voiceSettings.voiceURI}
            onChange={(e) => updateVoiceSettings({ voiceURI: e.target.value })}
            className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">默认</option>
            {voices
              .filter(v => v.gender === voiceSettings.voiceGender)
              .map((voice) => (
                <option key={voice.voiceURI} value={voice.voiceURI}>
                  {voice.name} ({voice.lang})
                </option>
              ))}
          </select>
        </div>
      )}

      {/* 朗读速度 */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          朗读速度: {voiceSettings.speechRate.toFixed(1)}x
        </label>
        <input
          type="range"
          min="0.5"
          max="1.5"
          step="0.1"
          value={voiceSettings.speechRate}
          onChange={(e) => updateVoiceSettings({ speechRate: parseFloat(e.target.value) })}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex justify-between text-xs text-gray-400 mt-1">
          <span>慢</span>
          <span>正常</span>
          <span>快</span>
        </div>
      </div>

      {/* 测试按钮 */}
      <button
        onClick={handleTestVoice}
        className="w-full py-2.5 bg-indigo-100 text-indigo-700 rounded-xl font-medium hover:bg-indigo-200 transition-all flex items-center justify-center space-x-2"
      >
        <Volume2 className="w-4 h-4" />
        <span>测试语音</span>
      </button>

      {/* 测试时自动播放 */}
      <div className="mt-4 flex items-center justify-between">
        <span className="text-sm text-gray-700">测试时自动播放读音</span>
        <button
          onClick={() => updateVoiceSettings({ autoPlayInQuiz: !voiceSettings.autoPlayInQuiz })}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
            voiceSettings.autoPlayInQuiz ? 'bg-indigo-600' : 'bg-gray-300'
          }`}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
              voiceSettings.autoPlayInQuiz ? 'translate-x-6' : 'translate-x-1'
            }`}
          />
        </button>
      </div>
    </div>
  );
};

export default VoiceSelector;
