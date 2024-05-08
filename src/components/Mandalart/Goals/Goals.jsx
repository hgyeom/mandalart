import React from 'react';
import { useAtom } from 'jotai';
import { goals } from '../../../store/goals';

const Goals = ({ tableKey, rows }) => {
  const [goalsValue, setGoalsAtom] = useAtom(goals);

  const handleGoalChange = (key, value) => {
    if (value.length > 12) return;
    if (tableKey !== '0') return;
    setGoalsAtom((curr) => {
      return { ...curr, [key]: value };
    });
  };

  // 목표 위치에 따른 placeholder 텍스트 설정
  const getPlaceholder = (key) => {
    if (tableKey === '0') {
      return key === '0' ? '최종 목표' : `목표 ${key}`;
    } else {
      if (key === '0') return `목표 ${tableKey}`;
    }
  };

  return (
    <div className="goalWrapper">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className={`goals `}>
          {row.map((number) => (
            <div
              key={number}
              className={`${['first', 'second', 'third'][rowIndex]}-${
                ['first', 'second', 'third'][row.indexOf(number)]
              }`}
            >
              {tableKey !== '0' ? (
                number !== '0' ? (
                  <textarea
                    className="goal"
                    placeholder={getPlaceholder(number)}
                  />
                ) : (
                  <div className="goal subGoal">
                    {!goalsValue[tableKey]
                      ? `목표 ${tableKey}`
                      : goalsValue[tableKey]}
                  </div>
                )
              ) : number === '0' ? (
                <textarea
                  className="goal center "
                  placeholder={getPlaceholder(number)}
                />
              ) : (
                <textarea
                  className="goal"
                  placeholder={getPlaceholder(number)}
                  value={goalsValue[number]}
                  onChange={(e) => handleGoalChange(number, e.target.value)}
                />
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Goals;
