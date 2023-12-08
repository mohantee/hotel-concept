import { useState } from "react";
import { Modal, Tooltip } from "antd";
import "./add-hotel-dialog.css";
import { FaLightbulb } from "react-icons/fa6";
import { useCreateHotel } from "../api/hotel/create-hotel";
import { useForm, SubmitHandler } from "react-hook-form";

interface Inputs {
  hotel_name: string;
  country_code: string;
  city_code: string;
}

export function AddHotelDialog() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const { register, handleSubmit, reset } = useForm<Inputs>();
  const mutation = useCreateHotel();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const country_code = parseInt(data.country_code);
    const city_code = parseInt(data.city_code);
    await mutation.mutateAsync({ ...data, country_code, city_code });
    reset();
    handleCancel();
  };

  return (
    <>
      <button onClick={showModal} className="btn">
        Add Hotel
      </button>
      <Modal
        title="Add Hotel"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <form className="add-hotel" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="hotel_name" className="add-hotel__label">
            Hotel Name
          </label>
          <input
            id="hotel_name"
            type="text"
            className="add-hotel__input"
            {...register("hotel_name", { required: true })}
          />
          <div className="add-hotel__hint">
            <label htmlFor="city_code" className="add-hotel__label">
              City Code
            </label>
            <Tooltip title="Please use a city code inside the range of 1-34.">
              <FaLightbulb className="add-hotel__icon" />
            </Tooltip>
          </div>
          <input
            id="city_code"
            type="number"
            className="add-hotel__input"
            min={1}
            max={34}
            {...register("city_code", { required: true, min: 1, max: 34 })}
          />
          <div className="add-hotel__hint">
            <label htmlFor="country_code" className="add-hotel__label">
              Country Code
            </label>
            <Tooltip title="Please use a country code inside the range of 1-7.">
              <FaLightbulb className="add-hotel__icon" />
            </Tooltip>
          </div>
          <input
            id="country_code"
            type="number"
            className="add-hotel__input"
            min={1}
            max={7}
            {...register("country_code", { required: true, min: 1, max: 7 })}
          />
          <div className="add-hotel__form-controls">
            <button type="button" className="btn" onClick={() => reset()}>
              Reset
            </button>
            <button className="btn" type="submit">
              Submit
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
}
