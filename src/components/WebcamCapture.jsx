import "../assets/scss/WebcamCapture.scss";
import { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";

function WebcamCapture() {
  const [openWebcam, setOpenWebcam] = useState(false);
  const webcamRef = useRef(null);
  const [imgSrc, SetImgSrc] = useState(null);

  const capture = useCallback(() => {
    const screenshot = webcamRef.current.getScreenshot();
    SetImgSrc(screenshot);
    console.log(screenshot);
  }, [webcamRef]);

  const initiateWebcam = () => {
    setOpenWebcam(true);
  };

  return (
    <>
      <div className="d-flex align-items-center justify-content-center">
        <button className="magic-btn surprise-btn" onClick={initiateWebcam}>
          Surprise!
        </button>
      </div>
      {openWebcam === true && (
        <div className="magic-wrapper webcam-wrapper d-flex flex-column justify-content-center align-items-center">
          <Webcam
            width={768}
            height={432}
            ref={webcamRef}
            mirrored
            screenshotFormat="image/png"
            screenshotQuality={1}
          />
          <button onClick={capture}>Take Photo</button>

          {imgSrc !== null && (
            <div className="preview d-flex justify-content-center align-items-center">
              <img src={imgSrc} alt="" />

              <a href={imgSrc} download={"captured.png"}>
                Download
              </a>
            </div>
          )}
        </div>
      )}
    </>
  );
}
export default WebcamCapture;
