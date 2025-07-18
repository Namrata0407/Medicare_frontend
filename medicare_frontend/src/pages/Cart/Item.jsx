import { useContext, useState } from "react";
import "./Cart.css";
import { AuthContext } from "../../Context/AuthContext";
import { FiTrash2, FiMinus, FiPlus } from "react-icons/fi";
import axios from "axios";
import { useToast } from "@chakra-ui/react";

export const Item = ({
  _id,
  product_title,
  pack_size,
  final_price,
  MRP,
  id,
  quantity,
  handleChange,
  handleDelete,
  discount,
}) => {
  const { token } = useContext(AuthContext);
  const [quantities, setQuantity] = useState(quantity || 0);
  const toast = useToast();

  const updateQuantity = async (change) => {
    const newQuantity = quantities + change;
    if (newQuantity < 1 || newQuantity > 10) return;
    try {
      await axios.patch(
        `${process.env.REACT_APP_BASEURL}/cart/update/${_id}`,
        { quantity: newQuantity },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setQuantity(newQuantity);
    } catch (error) {
      toast({
        title: "Failed to update quantity",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <div className="Item-conatiner">
      <div className="left-item-container">
        <h6>{product_title}</h6>
        <p>{pack_size}</p>
        <div className="remove-div" onClick={() => handleDelete(_id, token)}>
          <FiTrash2
            size={22}
            color="#ff6f61"
            style={{ verticalAlign: "middle" }}
          />
          <p style={{ marginTop: "15px" }}>Remove</p>
        </div>
      </div>
      <div className="right-item-container">
        <h6>₹ {final_price}</h6>
        <p>MRP ₹{MRP}</p>
        <div className="quantity-div">
          <div disabled={quantities === 1} onClick={() => updateQuantity(-1)}>
            <FiMinus
              size={20}
              color={quantities === 1 ? "#ccc" : "#ff6f61"}
              style={{ verticalAlign: "middle" }}
            />
          </div>
          <div>
            <p style={{ marginTop: "15px" }}>{quantities}</p>
          </div>
          <div disabled={quantities === 10} onClick={() => updateQuantity(1)}>
            <FiPlus
              size={20}
              color={quantities === 10 ? "#ccc" : "#ff6f61"}
              style={{ verticalAlign: "middle" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
