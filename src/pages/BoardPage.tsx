import { useParams } from "react-router-dom";
import CustomButton from "../components/Button";
import CustomInput from "../components/Input";
import Board from "../components/Board";
import { Token } from "../components/Token";

const BoardPage = () => {
  const { id } = useParams();

  return (
    <div>
      <Board image="https://picsum.photos/1440/1080"></Board>
      <h1>Board {id}</h1>
      <CustomButton onClick={() => {}}>
        <span>Teste button</span>
      </CustomButton>
      <CustomInput label="Teste input" variant={"outlined"} />

      <Token
        image="https://fastly.picsum.photos/100/100"
        description="test"
      />

    </div>
  );
}

export default BoardPage;
