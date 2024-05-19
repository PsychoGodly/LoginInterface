import { FunctionComponent } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";

const Glassmorphism: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-gray-100 h-[628px] overflow-hidden text-left text-mini text-white font-montserrat">
      <img
        className="absolute top-[-105px] left-[-24.6px] w-[277.8px] h-[201.2px] overflow-hidden"
        alt=""
        src="/frame.svg"
      />
      <div className="absolute top-[-105px] left-[-91px] w-[1294px] h-[863px] overflow-hidden">
        <img
          className="absolute top-[50px] left-[0px] w-[1294px] h-[813px] object-cover"
          alt=""
          src="/image-1@2x.png"
        />
      </div>
      <div className="absolute top-[-105px] left-[991px] rounded-[50%] box-border w-[284px] h-[284px] opacity-[0.2] border-[1px] border-solid border-white" />
      <img
        className="absolute top-[-105px] left-[613px] w-[209px] h-[854px] overflow-hidden"
        alt=""
        src="/frame1.svg"
      />
      <img
        className="absolute top-[-105px] left-[422px] w-[122px] h-[166px] overflow-hidden"
        alt=""
        src="/frame2.svg"
      />
      <div className="absolute top-[-105px] left-[671px] w-[479px] h-[685px] overflow-hidden">
        <div className="absolute top-[188px] left-[0px] [backdrop-filter:blur(60px)] rounded-[27px] [background:linear-gradient(109.46deg,_rgba(201,_201,_201,_0.8),_rgba(196,_196,_196,_0.1))] box-border w-[479px] h-[497px] opacity-[0.5] border-[1px] border-solid border-gray-200" />
      </div>
      <div className="absolute top-[-105px] left-[701px] w-[419px] h-[414px] overflow-hidden">
        <TextField
          className="[border:none] bg-[transparent] absolute top-[364px] left-[0px] [backdrop-filter:blur(60px)] opacity-[0.5]"
          color="primary"
          variant="outlined"
          sx={{ "& .MuiInputBase-root": { height: "50px" }, width: "419px" }}
        />
      </div>
      <div className="absolute top-[-105px] left-[701px] w-[419px] h-[517px] overflow-hidden">
        <TextField
          className="[border:none] bg-[transparent] absolute top-[467px] left-[0px] [backdrop-filter:blur(60px)] opacity-[0.5]"
          color="primary"
          variant="outlined"
          sx={{ "& .MuiInputBase-root": { height: "50px" }, width: "419px" }}
        />
      </div>
      <div className="absolute top-[-105px] left-[701px] w-[419px] h-[622px] overflow-hidden">
        <Button
          className="absolute top-[572px] left-[0px]"
          disableElevation={true}
          color="primary"
          variant="outlined"
          sx={{ borderRadius: "0px 0px 0px 0px", width: 419, height: 50 }}
        />
      </div>
      <div className="absolute top-[-105px] left-[885px] w-[50px] h-[606px] overflow-hidden text-black">
        <div className="absolute top-[588px] left-[0px] font-semibold">
          LOGIN
        </div>
      </div>
      <div className="absolute top-[-105px] left-[701px] w-[419px] h-[247px] overflow-hidden text-[40px] font-iceland">
        <div className="absolute top-[208px] left-[0px] inline-block w-[419px]">
          Login
        </div>
      </div>
      <div className="absolute top-[-105px] left-[701px] w-[419px] h-[291px] overflow-hidden text-[20px]">
        <div className="absolute top-[267px] left-[0px] font-light inline-block w-[419px]">
          Welcome onboard with us!
        </div>
      </div>
      <div className="absolute top-[-105px] left-[701px] w-[79px] h-[359px] overflow-hidden">
        <div className="absolute top-[341px] left-[0px]">Username</div>
      </div>
      <div className="absolute top-[-105px] left-[701px] w-[73px] h-[462px] overflow-hidden">
        <div className="absolute top-[444px] left-[0px]">Password</div>
      </div>
      <div className="absolute top-[-105px] left-[1012px] w-[108px] h-[542px] overflow-hidden text-[12px]">
        <div className="absolute top-[527px] left-[0px]">Forgot Password?</div>
      </div>
      <div className="absolute top-[-105px] left-[804px] w-[212px] h-[655px] overflow-hidden">
        <div className="absolute top-[637px] left-[0px]">
          <span className="font-light">{`New to Logo? `}</span>
          <b>Register</b>
          <span className="font-light"> Here</span>
        </div>
      </div>
      <div className="absolute top-[-105px] left-[716px] w-[158px] h-[398px] overflow-hidden">
        <div className="absolute top-[380px] left-[0px] font-light opacity-[0.5]">
          Enter your username
        </div>
      </div>
      <div className="absolute top-[-105px] left-[716px] w-[153px] h-[501px] overflow-hidden">
        <div className="absolute top-[483px] left-[0px] font-light opacity-[0.5]">
          Enter your password
        </div>
      </div>
      <div className="absolute top-[-105px] left-[36px] w-[150px] h-[169px] overflow-hidden">
        <div className="absolute top-[135px] left-[0px] w-[150px] h-[34px]" />
      </div>
      <div className="absolute top-[151.5px] left-[700.5px] box-border w-[111px] h-px border-t-[1px] border-solid border-white" />
    </div>
  );
};

export default Glassmorphism;
