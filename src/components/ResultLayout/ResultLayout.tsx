const ResultLayout = ({ children }) => {
  //1, when there isn't result
  //2, when the result is sunny
  //3, when the result is rainy
  //4, when the result is cloudy
  //5, when the result is snowy
  return (
    <div className="w-80 rounded-2xl bg-yellow-medium mt-6">{children}</div>
  );
};

export default ResultLayout;
