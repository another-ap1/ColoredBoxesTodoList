import Reactf, {useState} from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

const BoxList = () => {
    const [boxes, setBoxes] = useState([])
    const add = boxObj => {
        setBoxes(boxes => [...boxes, boxObj]);
    }

    const remove = id => {
        setBoxes(boxes => boxes.filter(box => box.id !== id));
      };
      
    const renderBoxes = boxes.map(b => (
        <Box
            key={b.id}
            box={b}
            handleRemove={remove}
        />
    ))

    return (
        <div> 
            <NewBoxForm addBox={add}/>
            {renderBoxes}
        </div>
    )
}

export default BoxList;