//Team page

import { useCallback } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const FrameChild = styled.img`
  position: absolute;
  top: 65.5px;
  left: 337.4px;
  width: 39.6px;
  height: 65.5px;
`;
const SimplyUs = styled.div`
  position: absolute;
  top: 67px;
  left: 369px;
  font-size: 60px;
  color: var(--color-black);
  display: inline-block;
  width: 287px;
  height: 46px;
`;
const FrameItem = styled.img`
  position: absolute;
  top: 178px;
  left: 110px;
  border-radius: 50%;
  width: 114px;
  height: 113px;
  object-fit: cover;
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
  left: 40px;
  display: inline-block;
  width: 255px;
  height: 74px;
`;
const FrameInner = styled.img`
  position: absolute;
  top: 384px;
  left: 265px;
  border-radius: 50%;
  width: 113px;
  height: 113px;
  object-fit: cover;
`;
const Role4Eastlighting1gachonac = styled.div`
  position: absolute;
  top: 507px;
  left: 194px;
  display: inline-block;
  width: 256px;
  height: 99px;
`;
const EllipseIcon = styled.img`
  position: absolute;
  top: 384px;
  left: 600px;
  border-radius: 50%;
  width: 113px;
  height: 113px;
  object-fit: cover;
`;
const Role5Hmuy913gachonackr = styled.div`
  position: absolute;
  top: 507px;
  left: 533px;
  display: inline-block;
  width: 247px;
  height: 95px;
`;
const FrameChild1 = styled.img`
  position: absolute;
  top: 178px;
  left: 433px;
  border-radius: 50%;
  width: 113px;
  height: 113px;
  object-fit: cover;
`;
const Role2Xornjswldhgachonackr = styled.div`
  position: absolute;
  top: 300px;
  left: 363px;
  display: inline-block;
  width: 253px;
  height: 97px;
`;
const Role3Ms987796gachonackr = styled.div`
  position: absolute;
  top: 300px;
  left: 684px;
  display: inline-block;
  width: 254px;
  height: 97px;
`;
const FrameChild2 = styled.img`
  position: absolute;
  top: 178px;
  left: 756px;
  border-radius: 50%;
  width: 113px;
  height: 113px;
  object-fit: cover;
`;
const RectangleDiv = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  font-size: var(--font-size-mini);
  background-color: var(--color-white);
  width: 100%; /* Adjusted to cover the entire width */
  height: 63px;
`;
const Home = styled.div`
  position: absolute;
  top: 0px;
  left: 66%; /* Adjusted to cover the right side */
  font-size: var(--font-size-mini);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 23%; /* Adjusted to cover the right side */
  height: 63px;
`;

const Team = styled.div`
  position: absolute;
  top: 0px;
  left: 74%; /* Adjusted to cover the right side */
  font-size: var(--font-size-mini);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 19%; /* Adjusted to cover the right side */
  height: 63px;
  cursor: pointer;
`;

const Vision = styled.div`
  position: absolute;
  top: 0px;
  left: 82%; /* Adjusted to cover the right side */
  font-size: var(--font-size-mini);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15%; /* Adjusted to cover the right side */
  height: 63px;
  cursor: pointer;
`;

const Value = styled.div`
  position: absolute;
  top: 0px;
  left: 89%; /* Adjusted to cover the right side */
  font-size: var(--font-size-mini);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 11%; /* Adjusted to cover the right side */
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
const LineParentRoot = styled.div`
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

const Frame1 = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/frame-1");
  }, [navigate]);

  const onTeamTextClick = useCallback(() => {
    navigate("/frame-2");
  }, [navigate]);

  const onValueTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <LineParentRoot>
      <FrameChild alt="" src="/line-1.svg" />
      <SimplyUs>Simply us</SimplyUs>
      <FrameItem alt="" src="/ellipse-1@2x.png" />
      <Role1Epnjh0807gachonackr>
        <P>김주혜</P>
        <Epnjh0807gachonackr>Role1</Epnjh0807gachonackr>
        <Epnjh0807gachonackr>epnjh0807@gachon.ac.kr</Epnjh0807gachonackr>
      </Role1Epnjh0807gachonackr>
      <FrameInner alt="" src="/ellipse-4@2x.png" />
      <Role4Eastlighting1gachonac>
        <P>김동현</P>
        <Epnjh0807gachonackr>Role4</Epnjh0807gachonackr>
        <Epnjh0807gachonackr>eastlighting1@gachon.ac.kr</Epnjh0807gachonackr>
      </Role4Eastlighting1gachonac>
      <EllipseIcon alt="" src="/ellipse-4@2x.png" />
      <Role5Hmuy913gachonackr>
        <P>백현정</P>
        <Epnjh0807gachonackr>Role5</Epnjh0807gachonackr>
        <Epnjh0807gachonackr>hmuy913@gachon.ac.kr</Epnjh0807gachonackr>
      </Role5Hmuy913gachonackr>
      <FrameChild1 alt="" src="/ellipse-4@2x.png" />
      <Role2Xornjswldhgachonackr>
        <P>김지오</P>
        <Epnjh0807gachonackr>Role2</Epnjh0807gachonackr>
        <Epnjh0807gachonackr>xornjswldh@gachon.ac.kr</Epnjh0807gachonackr>
      </Role2Xornjswldhgachonackr>
      <Role3Ms987796gachonackr>
        <P>김민수</P>
        <Epnjh0807gachonackr>Role3</Epnjh0807gachonackr>
        <Epnjh0807gachonackr>ms987796@gachon.ac.kr</Epnjh0807gachonackr>
      </Role3Ms987796gachonackr>
      <FrameChild2 alt="" src="/ellipse-4@2x.png" />
      <RectangleDiv />
      <Home onClick={onHomeTextClick}>Home</Home>
      <Team onClick={onTeamTextClick}>Team</Team>
      <Vision>Vision</Vision>
      <Value onClick={onValueTextClick}>Value</Value>
      <Geeklogo1Icon alt="" src="/geeklogo-1@2x.png" />
    </LineParentRoot>
  );
};

export default Frame1;
