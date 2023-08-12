import Plan from "../../components/Membership/Plan";
import PlanHeading from "../../components/Membership/PlanHeading";
import "./noteCss/Membership.css";

export default function MemberShip() {
  const basicProps = {
    planType: "Basic",
    noteNumber: 50,
    planPrice: 0,
    noteStats: false,
    adding: true,
    fullSecurity: true,
    support: true,
    noteAnalysis: false,
    sharing: false,
    planColor: {
      backgroundColor: "#8a2be2",
    },
  };
  const proProps = {
    planType: "Standard",
    noteNumber: 100000,
    planPrice: 199,
    adding: true,
    fullSecurity: true,
    support: true,
    sharing: true,
    noteAnalysis: false,
    noteStats: false,
    planColor: {
      backgroundColor: "#f38405",
    },
  };
  const premiumProps = {
    planType: "Premium",
    noteNumber: "Unlimited",
    planPrice: 499,
    noteAnalysis: true,
    adding: true,
    fullSecurity: true,
    support: true,
    noteStats: true,
    sharing: true,
    planColor: {
      backgroundColor: "#f3b405",
    },
  };

  return (
    <div className="nContainer">
      <PlanHeading />
      <div className="plans">
        <Plan plan={basicProps} />
        <Plan plan={proProps} />
        <Plan plan={premiumProps} />
      </div>
    </div>
  );
}
