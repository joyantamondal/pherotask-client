import axios from "axios";
import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./AddBillingModal.css";

const AddBillModal = ({ openBilling, handleBillingClose, reset }) => {
  // react hook form
  const { register,formState: { errors }, handleSubmit,} = useForm();

    const onSubmit = (data) =>{
    axios.post('http://localhost:5000/add-billing', data)
    .then(res=>{
    alert('Bill Added Successfully');
    reset();
    })
    }
    
  return (
    <div>
      <Modal show={openBilling} onHide={handleBillingClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Bill</Modal.Title>
        </Modal.Header>

        <Modal.Body className="add-billing">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("fullName", { required: true })}
              placeholder="Full Name"
              className="mb-2"
            />
            {errors.fullName && <p>Full name is required</p>}
            <input
              {...register("email", { required: "Email Address is required" })}
              placeholder="Email"
            />
            <p>{errors.email?.message}</p>
            <input
              {...register("phone", { required: true })}
              placeholder="Phone Number"
              className="mb-2"
            />
            {errors.phone && <p>Phone Number is required</p>}
            <input
              {...register("paidAmount", { required: true })}
              placeholder="Paid Amount"
              className="mb-2"
            />
            {errors.paidAmount && <p>Paid Amount is required</p>}

            <input type="submit" value="Add Bill" />
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AddBillModal;
