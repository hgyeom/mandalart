import { useSetAtom } from 'jotai';
import React from 'react';
import { goals } from '../../../store/goals';

const Goals = ({ tableKey, goalsValue }) => {
  const setGoalsAtom = useSetAtom(goals);

  const handleGoalChange = (number, value) => {
    if (tableKey !== '0' || number === 0) return;
    setGoalsAtom((curr) => {
      return { ...curr, [number]: value };
    });
  };

  return (
    <div className="goalWrapper">
      <div className="goals">
        <div key={1} className={`hide-input first-first`}>
          <textarea
            className="goal"
            onChange={(e) => handleGoalChange(1, e.target.value)}
            placeholder={tableKey === '0' && '목표 1'}
          ></textarea>
        </div>
        <div key={2} className={`hide-input first-second`}>
          <textarea
            className="goal"
            onChange={(e) => handleGoalChange(2, e.target.value)}
            placeholder={tableKey === '0' && '목표 2'}
          ></textarea>
        </div>
        <div key={3} className={`hide-input first-third`}>
          <textarea
            className="goal"
            onChange={(e) => handleGoalChange(3, e.target.value)}
            placeholder={tableKey === '0' && '목표 3'}
          ></textarea>
        </div>
      </div>
      <div className="goals">
        <div key={4} className={`hide-input second-first`}>
          <textarea
            className="goal"
            onChange={(e) => handleGoalChange(4, e.target.value)}
            placeholder={tableKey === '0' && '목표 4'}
          ></textarea>
        </div>
        <div key={0} className={`hide-input second-second`}>
          <textarea
            className="goal"
            onChange={(e) => handleGoalChange(0, e.target.value)}
            placeholder={tableKey === '0' ? '최종 목표' : `목표 ${tableKey}`}
            value={goalsValue}
          >
            {goalsValue}
          </textarea>
        </div>
        <div key={5} className={`hide-input second-third`}>
          <textarea
            className="goal"
            onChange={(e) => handleGoalChange(5, e.target.value)}
            placeholder={tableKey === '0' ? '목표 5' : ''}
          ></textarea>
        </div>
      </div>
      <div className="goals">
        <div key={6} className={`hide-input third-first`}>
          <textarea
            className="goal"
            onChange={(e) => handleGoalChange(6, e.target.value)}
            placeholder={tableKey === '0' ? '목표 6' : ''}
          ></textarea>
        </div>
        <div key={7} className={`hide-input third-second`}>
          <textarea
            className="goal"
            onChange={(e) => handleGoalChange(7, e.target.value)}
            placeholder={tableKey === '0' ? '목표 7' : ''}
          ></textarea>
        </div>
        <div key={8} className={`hide-input third-third`}>
          <textarea
            className="goal"
            onChange={(e) => handleGoalChange(8, e.target.value)}
            placeholder={tableKey === '0' ? '목표 8' : ''}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default Goals;
