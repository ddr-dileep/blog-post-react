import { AppInput } from "../input";

export const AppForm = ({ className, formFields, onFormSubmit }: any) => {
  const onHandleInputChange = (event: any) => {
    console.log(event.target);
  };
  return (
    <div className={`main-app-form ${className}`}>
      <form>
        {formFields?.map((field: any) => (
          <AppInput
            key={field.name}
            onChange={onHandleInputChange}
            {...field}
          />
        ))}
        <button onClick={onFormSubmit}>Submit</button>
      </form>
    </div>
  );
};
