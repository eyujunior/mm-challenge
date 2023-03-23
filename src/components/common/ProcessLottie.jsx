import Lottie from "lottie-react";
import ProcessLottieJson from "../../assets/icons/process.json";

const style = {
  width: window?.innerWidth * 0.7,
};
const ProcessLottie = () => (
  <Lottie animationData={ProcessLottieJson} style={style} loop={true} />
);

export default ProcessLottie;
