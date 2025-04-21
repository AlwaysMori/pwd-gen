import { useState } from 'react';
import { FaInstagram, FaGithub, FaFacebook } from 'react-icons/fa';

const PasswordGenerator = () => {
  const [length, setLength] = useState(16);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpecial, setIncludeSpecial] = useState(true);
  const [password, setPassword] = useState('');
  const [isGenerateActive, setIsGenerateActive] = useState(false);
  const [isCopyActive, setIsCopyActive] = useState(false);

  const generatePassword = () => {
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()_+{}[];:<>,.?~';

    let chars = lowercaseChars;
    if (includeUppercase) chars += uppercaseChars;
    if (includeNumbers) chars += numberChars;
    if (includeSpecial) chars += specialChars;

    let generated = '';
    for (let i = 0; i < length; i++) {
      generated += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(generated);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
  };

  const handleGenerateClick = () => {
    setIsGenerateActive(true);
    setTimeout(() => setIsGenerateActive(false), 150);
    generatePassword();
  };

  const handleCopyClick = () => {
    setIsCopyActive(true);
    setTimeout(() => setIsCopyActive(false), 150);
    copyToClipboard();
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-[#f5f5f5] text-[#333333]">
      {/* Decorative Elements */}
      
      <div className="bg-[#ffffff] border-2 border-[#333333] p-8 w-96 text-center rounded-none shadow-[8px_8px_0px_#000000]">
        <h1 className="text-lg font-bold mb-6">🔒 PASSWORD GENERATOR</h1>

        {/* Length Selector & Generate Button */}
        <div className="flex items-center mb-6">
          <select
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="border-2 border-[#333333] px-3 py-2 mr-3 bg-[#ffffff] text-[#333333] rounded-none shadow-[4px_4px_0px_#000000]"
          >
            {[8, 16, 32, 64].map(num => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
          <button
            onClick={handleGenerateClick}
            className={`border-2 border-[#333333] px-4 py-2 font-medium bg-[#ffffff] text-[#333333] rounded-none hover:bg-[#eaeaea] shadow-[4px_4px_0px_#000000] ${
              isGenerateActive ? 'active' : ''
            }`}
          >
            🚀 GENERATE PASSWORD
          </button>
        </div>

        {/* Options */}
        <div className="text-left text-sm mb-6">
          <label className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={includeUppercase}
              onChange={() => setIncludeUppercase(!includeUppercase)}
              className="mr-2 rounded-none"
            />
            🔠 Include Uppercase Letters
          </label>
          <label className="flex items-center mb-2 rounded-none">
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={() => setIncludeNumbers(!includeNumbers)}
              className="mr-2 rounded-none"
            />
            🔢 Include Numbers
          </label>
          <label className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={includeSpecial}
              onChange={() => setIncludeSpecial(!includeSpecial)}
              className="mr-2 rounded-none"
            />
            💎 Include Special Characters
          </label>
        </div>

        {/* Password Output & Copy */}
        <div className="flex mb-6">
          <input
            type="text"
            readOnly
            value={password}
            className="border-2 border-[#333333] flex-grow px-3 py-2 mr-3 bg-[#ffffff] text-[#333333] rounded-none shadow-[4px_4px_0px_#000000]"
          />
          <button
            onClick={handleCopyClick}
            className={`border-2 border-[#333333] px-4 py-2 bg-[#ffffff] text-[#333333] rounded-none hover:bg-[#eaeaea] shadow-[4px_4px_0px_#000000] ${
              isCopyActive ? 'active' : ''
            }`}
          >
            COPY
          </button>
        </div>

        {/* Socials */}
        <div className="flex justify-center space-x-4">
          <button className="border-2 border-[#333333] p-2 bg-[#ffffff] text-[#333333] rounded-none hover:bg-[#eaeaea] shadow-[4px_4px_0px_#000000]">
            <FaInstagram size={16} />
          </button>
          <button className="border-2 border-[#333333] p-2 bg-[#ffffff] text-[#333333] rounded-none hover:bg-[#eaeaea] shadow-[4px_4px_0px_#000000]">
            <FaGithub size={16} />
          </button>
          <button className="border-2 border-[#333333] p-2 bg-[#ffffff] text-[#333333] rounded-none hover:bg-[#eaeaea] shadow-[4px_4px_0px_#000000]">
            <FaFacebook size={16} />
          </button>
        </div>

        <p className="text-xs font-medium text-[#999999] mt-6">AlwaysMori.</p>
      </div>
    </div>
  );
};

export default PasswordGenerator;
