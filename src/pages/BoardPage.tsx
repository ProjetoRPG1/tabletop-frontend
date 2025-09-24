import { useParams } from "react-router-dom";
import CustomButton from "../components/Button";
import CustomInput from "../components/Input";
import Board from "../components/Board";

const BoardPage = () => {
  const { id } = useParams();

  return (
    <div>
      <Board image="https://picsum.photos/3000/3000"></Board>
      <h1>Board {id}</h1>
      <CustomButton onClick={() => {}}>
        <span>Teste button</span>
      </CustomButton>
      <CustomInput label="Teste input" variant={"outlined"} />
    </div>
  );
}

export default BoardPage;
