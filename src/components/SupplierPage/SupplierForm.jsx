
import React from "react";
import styles from "./SupplierPage.module.css";

const SupplierForm = () => {
  return (
    <form className={styles.formContainer}>
      <div className={styles.formWrapper}>
        <div className={styles.formRow}>
          <div className={styles.formField}>
            <label htmlFor="name" className="visually-hidden">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="NAME"
              className={styles.formInput}
              required
            />
          </div>
          <div className={styles.formSelect}>
            <label htmlFor="location" className={styles.selectLabel}>
              Location
            </label>
            <img
              src="https://https://i.pinimg.com/originals/e9/c4/1b/e9c41b5507f9aee5d15dfabee148d5eb.jpg"
              alt=""
              className={styles.selectIcon}
            />
          </div>
        </div>
        <div className={styles.formRow}>
          <div className={styles.formSelect}>
            <label htmlFor="idType" className={styles.selectLabel}>
              ID Type
            </label>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/02cd3d3a085a1a2348a9b327105ae95e9604d3a7752cbe21803628381a937e3b?apiKey=e9e3b1cf1c6c49d689c28c861602b444&&apiKey=e9e3b1cf1c6c49d689c28c861602b444"
              alt=""
              className={styles.selectIcon}
            />
          </div>
          <div className={styles.formField}>
            <label htmlFor="idNumber" className="visually-hidden">
              ID Number
            </label>
            <input
              type="text"
              id="idNumber"
              placeholder="ID NUMBER"
              className={styles.formInput}
              required
            />
          </div>
        </div>
        <div className={styles.formRow}>
          <div className={styles.formSelect}>
            <label htmlFor="foodType" className={styles.selectLabel}>
              Food Type
            </label>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/02cd3d3a085a1a2348a9b327105ae95e9604d3a7752cbe21803628381a937e3b?apiKey=e9e3b1cf1c6c49d689c28c861602b444&&apiKey=e9e3b1cf1c6c49d689c28c861602b444"
              alt=""
              className={styles.selectIcon}
            />
          </div>
          <div className={styles.formField}>
            <label htmlFor="quantity" className="visually-hidden">
              Quantity
            </label>
            <input
              type="number"
              id="quantity"
              placeholder="Quantity"
              className={styles.formInput}
              required
            />
          </div>
          <div className={styles.formSelect}>
            <label htmlFor="unit" className={styles.selectLabel}>
              Kg
            </label>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/02cd3d3a085a1a2348a9b327105ae95e9604d3a7752cbe21803628381a937e3b?apiKey=e9e3b1cf1c6c49d689c28c861602b444&&apiKey=e9e3b1cf1c6c49d689c28c861602b444"
              alt=""
              className={styles.selectIcon}
            />
          </div>
        </div>
        <div className={styles.buttonGroup}>
          <button type="button" className={styles.formButton}>
            Verify
          </button>
          <button type="submit" className={styles.formButton}>
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default SupplierForm;
