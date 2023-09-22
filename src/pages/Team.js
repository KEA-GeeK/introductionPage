import { useCallback } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import logoImg from '../img/logoNoName.png';

const TeamChild = styled.img`
  position: absolute;
  top: 65.5px;
  left: 336.4px;
  width: 39.6px;
  height: 65.5px;
`;
const SimplyUs = styled.div`
  position: absolute;
  top: 67px;
  left: 368px;
  font-size: 60px;
  color: var(--color-black);
  display: inline-block;
  width: 287px;
  height: 46px;
`;
const P = styled.p`
  margin: 0;
  font-size: var(--font-size-5xl);
  color: var(--color-black);
`;
const Epnjh0807gachonackr = styled.p`
  margin: 0;
`;
const Role1Epnjh0807gachonackr = styled.div`
  position: absolute;
  top: 297px;
  left: 39px;
  display: inline-block;
  width: 255px;
  height: 74px;
`;
const Role4Eastlighting1gachonac = styled.div`
  position: absolute;
  top: 507px;
  left: 193px;
  display: inline-block;
  width: 256px;
  height: 99px;
`;
const Role5Hmuy913gachonackr = styled.div`
  position: absolute;
  top: 507px;
  left: 532px;
  display: inline-block;
  width: 247px;
  height: 95px;
`;
const Role2Xornjswldhgachonackr = styled.div`
  position: absolute;
  top: 300px;
  left: 362px;
  display: inline-block;
  width: 253px;
  height: 97px;
`;
const Role3Ms987796gachonackr = styled.div`
  position: absolute;
  top: 300px;
  left: 683px;
  display: inline-block;
  width: 254px;
  height: 97px;
`;
const TeamItem = styled.div`
  position: absolute;
  top: 0px;
  left: -1px;
  background-color: var(--color-white);
  width: 1005px;
  height: 63px;
`;
const Home = styled.div`
  position: absolute;
  top: 0px;
  left: 676px;
  font-size: var(--font-size-mini);
  color: var(--color-gray-400);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 66px;
  height: 63px;
  cursor: pointer;
`;
const Team1 = styled.div`
  position: absolute;
  top: 0px;
  left: 754px;
  font-size: var(--font-size-mini);
  color: var(--color-gray-400);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 66px;
  height: 63px;
  cursor: pointer;
`;
const Vision = styled.div`
  position: absolute;
  top: 0px;
  left: 832px;
  font-size: var(--font-size-mini);
  color: var(--color-gray-400);
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
  left: 910px;
  font-size: var(--font-size-mini);
  color: var(--color-gray-400);
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
  left: 21px;
  width: 60px;
  height: 63px;
  object-fit: cover;
`;
const TeamInner = styled.img`
  position: absolute;
  top: 178px;
  left: 115px;
  border-radius: 50%;
  width: 104px;
  height: 104px;
  object-fit: cover;
`;
const EllipseIcon = styled.img`
  position: absolute;
  top: 393px;
  left: 604px;
  border-radius: 50%;
  width: 104px;
  height: 104px;
  object-fit: cover;
`;
const TeamChild1 = styled.img`
  position: absolute;
  top: 393px;
  left: 269px;
  border-radius: 50%;
  width: 104px;
  height: 104px;
  object-fit: cover;
`;
const TeamChild2 = styled.img`
  position: absolute;
  top: 178px;
  left: 758px;
  border-radius: 50%;
  width: 104px;
  height: 104px;
  object-fit: cover;
`;
const TeamChild3 = styled.img`
  position: absolute;
  top: 178px;
  left: 437px;
  border-radius: 50%;
  width: 104px;
  height: 104px;
  object-fit: cover;
`;
const TeamRoot = styled.div`
  position: relative;
  background-color: var(--color-white);
  width: 100%;
  height: 617px;
  overflow: hidden;
  text-align: center;
  font-size: var(--font-size-lgi);
  color: var(--color-gray-200);
  font-family: var(--font-inter);
`;

const Team = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/frame-1");
  }, [navigate]);

  const onTeamTextClick = useCallback(() => {
    navigate("/vision");
  }, [navigate]);

  const onVisionTextClick = useCallback(() => {
    navigate("/vision");
  }, [navigate]);

  const onValueTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <TeamRoot>
      <TeamChild alt="" src="/line-1.svg" />
      <SimplyUs>Simply us</SimplyUs>
      <Role1Epnjh0807gachonackr>
        <P>김주혜</P>
        <Epnjh0807gachonackr>Team leader, FE, BE</Epnjh0807gachonackr>
        <Epnjh0807gachonackr>epnjh0807@gachon.ac.kr</Epnjh0807gachonackr>
      </Role1Epnjh0807gachonackr>
      <Role4Eastlighting1gachonac>
        <P>김동현</P>
        <Epnjh0807gachonackr>FE, Data</Epnjh0807gachonackr>
        <Epnjh0807gachonackr>eastlighting1@gachon.ac.kr</Epnjh0807gachonackr>
      </Role4Eastlighting1gachonac>
      <Role5Hmuy913gachonackr>
        <P>백현정</P>
        <Epnjh0807gachonackr>BE, Data</Epnjh0807gachonackr>
        <Epnjh0807gachonackr>hmuy913@gachon.ac.kr</Epnjh0807gachonackr>
      </Role5Hmuy913gachonackr>
      <Role2Xornjswldhgachonackr>
        <P>김지오</P>
        <Epnjh0807gachonackr>FE, BE</Epnjh0807gachonackr>
        <Epnjh0807gachonackr>xornjswldh@gachon.ac.kr</Epnjh0807gachonackr>
      </Role2Xornjswldhgachonackr>
      <Role3Ms987796gachonackr>
        <P>김민수</P>
        <Epnjh0807gachonackr>FE, BE, Design</Epnjh0807gachonackr>
        <Epnjh0807gachonackr>ms987796@gachon.ac.kr</Epnjh0807gachonackr>
      </Role3Ms987796gachonackr>
      <TeamItem />
      <Home onClick={onHomeTextClick}>Home</Home>
      <Team1 onClick={onTeamTextClick}>Team</Team1>
      <Vision onClick={onVisionTextClick}>Vision</Vision>
      <Value onClick={onValueTextClick}>Value</Value>
      <Geeklogo1Icon alt="logoImg" src={logoImg} />
      <TeamInner alt="" src="/ellipse-6@2x.png" />
      <EllipseIcon alt="" src="/ellipse-10@2x.png" />
      <TeamChild1 alt="" src="/ellipse-9@2x.png" />
      <TeamChild2 alt="" src="/ellipse-8@2x.png" />
      <TeamChild3 alt="" src="/ellipse-9@2x.png" />
    </TeamRoot>
  );
};

export default Team;
