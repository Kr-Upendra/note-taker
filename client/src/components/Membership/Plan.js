const Plan = (props) => {
  const {
    planColor,
    planType,
    noteNumber,
    planPrice,
    noteAnalysis,
    sharing,
    noteStats,
    adding,
    fullSecurity,
    support,
  } = props.plan;

  const benefits = [
    `Add up to ${noteNumber}`,
    "Full Security",
    "24*7 support",
    "Sharing option in notes",
    "Note Analysis",
    "Note Statics",
  ];

  return (
    <div className="planbox">
      <div className="plan__type" style={planColor}>
        <h1>{planType}</h1>
      </div>
      <div className="plan__otd">
        <div className="plan__otd--pricing">
          <h2>₹{planPrice}/mo</h2>
        </div>

        <div className="plan__otd--benefits">
          <ul className="bn-container">
            {renderBenefits(
              benefits,
              noteAnalysis,
              noteStats,
              sharing,
              adding,
              fullSecurity,
              support
            )}
          </ul>
        </div>

        <div className="plan__otd--sbtn">
          <button className="s-btn">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Plan;

const renderBenefits = (
  benefits,
  noteAnalysis,
  noteStats,
  sharing,
  adding,
  fullSecurity,
  support
) => {
  return benefits.map((benefit, index) => (
    <li className="bn-items" key={index}>
      <div className="r">
        <span className="bn-items-t">{benefit}</span>
        {index === 0 && adding ? (
          <i className="fa-solid fa-check bn-mark-r"></i>
        ) : index === 1 && fullSecurity ? (
          <i className="fa-solid fa-check bn-mark-r"></i>
        ) : index === 2 && support ? (
          <i className="fa-solid fa-check bn-mark-r"></i>
        ) : index === 5 && sharing ? (
          <i className="fa-solid fa-check bn-mark-r"></i>
        ) : index === 4 && noteStats ? (
          <i className="fa-solid fa-check bn-mark-r"></i>
        ) : index === 3 && noteAnalysis ? (
          <i className="fa-solid fa-check bn-mark-r"></i>
        ) : (
          <i className="fa-solid fa-xmark bn-mark-x"></i>
        )}
      </div>
    </li>
  ));
};
