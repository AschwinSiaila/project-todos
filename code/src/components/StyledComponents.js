import styled from "styled-components/macro";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const TodosContainer = styled.section`
  background-color: white;
  color: black;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 20px;
  width: 100%;
  height: auto;

  @media (min-width: 764px) {
    max-width: 800px;
    box-shadow: 5px 5px 5px #efefef;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
    position: relative;
  }
`;

export const TodoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  width: 100%;
  height: auto;
  margin: 10px 0;
`;
export const TodoItem = styled.label`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  width: 87%;
  min-height: 55px;
  margin: 0;
  padding: 15px 10px;
  background-color: #efedff;
  border-radius: 15px;
`;

export const RemoveButton = styled.button`
  border-radius: 50%;
  width: 25px;
  height: 25px;
  border: 2px solid lightgrey;
  background-color: white;
  color: lightgrey;
  font-weight: bold;
  cursor: pointer;
`;

export const TodoTitle = styled.p`
  margin: 0;
  margin-left: 35px;
  font-weight: bold;
`;
export const TimeStamp = styled.p`
  position: absolute;
  bottom: 0;
  right: 10px;
  font-size: 15px;
  text-align: right;
`;

export const DueDate = styled.p`
  top: 0;
  right: 10px;
  color: red;
  font-size: 15px;
  text-align: right;
`;

export const SubmitButton = styled.button`
  border-radius: 15%;
  width: 35px;
  height: 35px;
  border: none;
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
`;

export const AddTodoButton = styled(SubmitButton)`
  box-shadow: 2px 2px 10px 2px black;
`;

export const Input = styled.input`
  box-sizing: border-box;
  width: 85%;
  height: 50px;
  border-radius: 15px;
  border: 2px solid black;
  padding: 10px;
  font-size: 16px;
  &::placeholder {
    color: black;
  }
`;

export const Form = styled.form``;

export const DeleteButton = styled.button`
  width: 70px;
  height: auto;
  border: none;
  box-shadow: 2px 2px 10px 2px black;
  font-size: 14px;
  border-radius: 15px;
  cursor: pointer;
  margin: 10px;
  padding: 5px;
`;

export const TopInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: black;
`;

export const DueButton = styled.button`
  width: auto;
  height: auto;
  border: none;
  box-shadow: 2px 2px 10px 2px black;
  font-size: 14px;
  border-radius: 15px;
  cursor: pointer;
  padding: 5px 10px;
  margin: 10px 0;
`;

export const DueDateContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 85%;
  color: red;
  font-size: 14px;
`;
