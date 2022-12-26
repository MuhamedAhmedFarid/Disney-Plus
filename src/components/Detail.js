import React from "react";
import styled from "styled-components";
function Detail() {
  return (
    <Container>
      <Background>
        <img src="https://images.pexels.com/photos/3411135/pexels-photo-3411135.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      </Background>
      <Imgtitle>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy580220TMPLLWqSwU8vsYYFuYqmTz24y-UoTvor7nRttWCwSyf1Yhn-iLrKweo1w8868&usqp=CAU" />
      </Imgtitle>
      <Controls>
        <PlayBtn>
          <img src="/images/play-icon-black.png" />
          <span>Play</span>
        </PlayBtn>
        <TrailBtn>
          <img src="/images/play-icon-white.png" />
          <span>Trailer</span>
        </TrailBtn>
        <AddBtn>
          <span>+</span>
        </AddBtn>
        <GroupWatchBtn>
          <img src="/images/group-icon.png" />
        </GroupWatchBtn>
      </Controls>
      <Subtitle>
        <p>lorem ljdjfi  sdiufjdf disufdmjf difjkds fidf</p>
      </Subtitle>
      <Descrition>
        fkdsjkfjka dksajfldajf kdsjfldkajfkji kjaieuowuqp dajflajqp ocl sdajfoiujew dlfjaoiqfdh ca fafdshaj fas .ahubnv 
      </Descrition>
    </Container>
  );
}

export default Detail;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0.8;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Imgtitle = styled.div`
  height: 30vh;
  padding: 40px 20px;
  width: 35vw;
  min-height: 170px;
  min-width: 200px;
  margin-top: 40px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
const Controls = styled.div`
  display: flex;
  align-items: center;
`;

const PlayBtn = styled.button`
  cursor: pointer;
  border-radius: 4px;
  padding: 0 24px;
  margin-right: 22px;
  font-size: 15px;
  display: flex;
  align-items: center; // aline the text and the img in the same line
  height: 56px;
  background: rgb(249, 249, 249);
  border: none;
  letter-spacing: 1.8px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.49) 0s;
  text-transform: uppercase;

  &:hover {
    background: rgb(198, 198, 198);
  }
`;

const TrailBtn = styled(PlayBtn)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
`;

const AddBtn = styled.button`
  margin-right: 16px;
  width: 44px;
  cursor: pointer;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid white;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  span {
    font-size: 30px;
    padding-bottom: 4px;
    color: white;
  }
  &:hover {
  }
`;

const GroupWatchBtn = styled(AddBtn)`
  background: rgb(0, 0, 0);
`;

const Subtitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;
`



const Descrition = styled.div`
    line-height: 1.4;
    font-size: 20px;
    margin-top:16px;
    color: rgb(249, 249, 249);
    max-width: 700px;

`