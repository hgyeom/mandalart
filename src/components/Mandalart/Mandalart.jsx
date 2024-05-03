import Goals from './Goals/Goals';
import { useAtomValue } from 'jotai';
import { goals } from '../../store/goals';

const Madalart = () => {
  const goalsValue = useAtomValue(goals);

  return (
    <section className="mandalart">
      <div className="tables first-row">
        <Goals tableKey="1" goalsValue={goalsValue[1]} />
        <Goals tableKey="2" goalsValue={goalsValue[2]} />
        <Goals tableKey="3" goalsValue={goalsValue[3]} />
      </div>
      <div className="tables second-row">
        <Goals tableKey="4" goalsValue={goalsValue[4]} />
        <Goals tableKey="0" />
        <Goals tableKey="5" goalsValue={goalsValue[5]} />
      </div>
      <div className="tables third-row">
        <Goals tableKey="6" goalsValue={goalsValue[6]} />
        <Goals tableKey="7" goalsValue={goalsValue[7]} />
        <Goals tableKey="8" goalsValue={goalsValue[8]} />
      </div>
    </section>
  );
};

export default Madalart;
