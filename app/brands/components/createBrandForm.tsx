"use client";
import { useState } from "react";
import { NextPage } from "next";
import { createBrand } from "@brands/services/brands.service";
import {
  AlertErrorComponent,
  AlertOkComponent,
} from "@brands/components/alertError";

const CreateBrandForm: NextPage = () => {
  const [name, setName] = useState("");
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const result = await createBrand(name);

    if (result.success) {
      setMessage(result.message);
      setIsError(false);
      setShowAlert(true);
    } else {
      setMessage(result.message);
      setIsError(true);
      setShowAlert(true);
    }
  };

  const handleCloseAlert = (): void => {
    setShowAlert(false);
    setMessage("");
  };

  return (
    <div className="grid grid-cols-1 gap-9 sm:grid-cols-2 ">
      <div className="flex flex-col gap-9">
        {showAlert && isError && (
          <AlertErrorComponent msg={message} onClose={handleCloseAlert} />
        )}
        {showAlert && !isError && (
          <AlertOkComponent msg={message} onClose={handleCloseAlert} />
        )}
        {/* <!-- Create Product Form --> */}
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">
              Create Brand
            </h3>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="p-6.5">
              <div className="mb-4.5">
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  Brand Name <span className="text-meta-1">*</span>
                </label>
                <input
                  id="name"
                  value={name}
                  type="text"
                  placeholder="Enter brand name"
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>

              <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default CreateBrandForm;
