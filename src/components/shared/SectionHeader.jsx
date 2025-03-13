import React from 'react';

const SectionHeader = ({ title, subtitle }) => {

  const [firstWord, ...restWords] = subtitle ? subtitle.split(' ') : [];
  const remainingText = restWords.join(' ');

  return (
    <div className="my-16 text-center">
      {/* Title */}
      <h1 className="text-sm font-semibold text-[#f5b754] tracking-[0.4em] uppercase">
        {title}
      </h1>

      {/* Subtitle */}
      {subtitle && (
        <h2 className="text-4xl font-bold mt-2">
          <span className="text-white">{firstWord}</span>{' '}
          <span className="text-[#f5b754]">{remainingText}</span>
        </h2>
      )}
    </div>
  );
};

export default SectionHeader;