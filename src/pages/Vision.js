import { useCallback } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import logoImg from '../img/logoNoName.png';

const Vision2 = styled.p`
  margin: 0;
`;
const Vision1 = styled.div`
  position: absolute;
  top: 97px;
  left: 32px;
  color: var(--color-black);
  display: inline-block;
  width: 92px;
  height: 36px;
`;
const VisionChild = styled.img`
  position: absolute;
  top: 140px;
  left: 35px;
  width: 46px;
  height: 1px;
`;
const SystemGathersVariety = styled.div`
  position: absolute;
  top: 166px;
  left: 35px;
  color: var(--color-mediumseagreen);
  text-align: left;
  display: inline-block;
  width: 432px;
  height: 93px;
`;
const Geek = styled.div`
  position: absolute;
  top: 259px;
  left: 32px;
  font-size: var(--font-size-5xl);
  color: var(--color-gray-100);
  text-align: left;
  display: inline-block;
  width: 538px;
  height: 131px;
`;
const Mission = styled.div`
  position: absolute;
  top: 316px;
  left: 844px;
  color: var(--color-black);
  text-align: right;
  display: inline-block;
  width: 116px;
  height: 36px;
`;
const VisionItem = styled.div`
  position: absolute;
  top: 368.5px;
  left: 913.5px;
  border-top: 1px solid var(--color-black);
  box-sizing: border-box;
  width: 47px;
  height: 1px;
`;
const SystemGathersVariety1 = styled.div`
  position: absolute;
  top: 386px;
  left: 528px;
  color: var(--color-mediumseagreen);
  text-align: right;
  display: inline-block;
  width: 432px;
  height: 93px;
`;
const Div = styled.div`
  position: absolute;
  top: 479px;
  left: 329px;
  font-size: var(--font-size-5xl);
  color: var(--color-gray-100);
  text-align: right;
  display: inline-block;
  width: 631px;
  height: 131px;
`;
const VisionInner = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: var(--color-white);
  width: 1005px;
  height: 63px;
`;
const Home = styled.div`
  position: absolute;
  top: 0px;
  left: 677px;
  font-size: var(--font-size-mini);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 66px;
  height: 63px;
  cursor: pointer;
`;
const Team = styled.div`
  position: absolute;
  top: 0px;
  left: 755px;
  font-size: var(--font-size-mini);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 66px;
  height: 63px;
  cursor: pointer;
`;
const Vision3 = styled.div`
  position: absolute;
  top: 0px;
  left: 833px;
  font-size: var(--font-size-mini);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 66px;
  height: 63px;
  cursor: pointer;
`;
const Value = styled.div`
  position: absolute;
  top: 0px;
  left: 911px;
  font-size: var(--font-size-mini);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 66px;
  height: 63px;
  cursor: pointer;
`;
const Geeklogo1Icon = styled.img`
  position: absolute;
  top: 0px;
  left: 22px;
  width: 60px;
  height: 63px;
  object-fit: cover;
`;
const VisionRoot = styled.div`
  position: relative;
  background-color: var(--color-white);
  width: 100%;
  height: 610px;
  overflow: hidden;
  text-align: center;
  font-size: var(--font-size-11xl);
  color: var(--color-gray-400);
  font-family: var(--font-inter);
`;

const Vision = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/frame-1");
  }, [navigate]);

  const onTeamTextClick = useCallback(() => {
    navigate("/team");
  }, [navigate]);

  const onVisionText1Click = useCallback(() => {
    navigate("/team");
  }, [navigate]);

  const onValueTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <VisionRoot>
      <Vision1>
        <Vision2>Vision</Vision2>
      </Vision1>
      <VisionChild alt="" src="/line-11.svg" />
      <SystemGathersVariety>
        “System gathers variety with knowledge pool”
      </SystemGathersVariety>
      <Geek>GeeK은 다양한 세상을 표현하는 플랫폼을 만듭니다.</Geek>
      <Mission>Mission</Mission>
      <VisionItem />
      <SystemGathersVariety1>
        “System gathers variety with knowledge pool”
      </SystemGathersVariety1>
      <Div>
        서로의 지식을 융합하여 문제해결에 새로운 방향성을 제시하며 끊임없이
        배우고 성장하는 우수한 개발자의 모습을 완성합니다.
      </Div>
      <VisionInner />
      <Home onClick={onHomeTextClick}>Home</Home>
      <Team onClick={onTeamTextClick}>Team</Team>
      <Vision3 onClick={onVisionText1Click}>Vision</Vision3>
      <Value onClick={onValueTextClick}>Value</Value>
      <Geeklogo1Icon alt="logoImg" src={logoImg} />
    </VisionRoot>
  );
};

export default Vision;
