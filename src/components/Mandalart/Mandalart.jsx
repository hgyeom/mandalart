import Goals from './Goals/Goals';

const Madalart = () => {
  const rows = [
    ['1', '2', '3'],
    ['4', '0', '5'],
    ['6', '7', '8'],
  ];

  return (
    <section className="mandalart">
      {rows.map((row, index) => (
        <div
          key={index}
          className={`tables ${['first', 'second', 'third'][index]}-row`}
        >
          {row.map((key) => (
            <Goals key={key} tableKey={key} rows={rows} />
          ))}
        </div>
      ))}
    </section>
  );
};

export default Madalart;
