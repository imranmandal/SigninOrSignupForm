import React from "react";

const Form = ({ inputFields, footerFields, btnText, onSubmit }) => {
  return (
    <>
      <form onSubmit={onSubmit} className="grid grid-col-auto">
        {inputFields?.length > 0 &&
          inputFields.map((field) => (
            <>
              <div className="py-4">
                <label className="py-1 block" htmlFor={field.name}>
                  {field.label}
                </label>
                <input
                  className="rounded-border"
                  id={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                />
              </div>
            </>
          ))}

        {footerFields?.length > 0 && (
          <div className="flex justify-between py-4">
            {footerFields.map((field) => (
              <>
                {field.type === "link" ? (
                  <p className="text-primary font-medium cursor-pointer">
                    Forgot your password?
                  </p>
                ) : (
                  <div className="cursor-pointer">
                    <input
                      type={field.type}
                      id={field.name}
                      name={field.name}
                      value={field.value}
                      className="cursor-pointer"
                    />
                    <label htmlFor={field.name} className="pl-2 cursor-pointer">
                      {field.label}
                    </label>
                  </div>
                )}
              </>
            ))}
          </div>
        )}

        <input
          type="submit"
          value={btnText}
          className="bg-primary text-white rounded-border font-medium cursor-pointer hover:shadow-xl"
        />
      </form>
    </>
  );
};

export default Form;
