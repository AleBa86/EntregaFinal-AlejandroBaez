import { object, string, number } from 'yup';

let userSchema = object({
  name: string().required("Nombre es requerido para poder realizar la compra"),
  phone: number("Telefono solo admite numeros").required("Telefono es requerido para poder realizar la compra").positive("Solo se admiten numero positivos").integer("Solo se admiten numeros enteros"),
  email: string().email().required("Email es requerido para poder realizar la compra"),
  repEmail: string().email().required("Repetir Email es requerido para poder realizar la compra")
});


let validateForm = async(dataForm) => {
 try {
    await userSchema.validate(dataForm)
    return {status: "Success"}
 } catch (error) {
    return { status: "error", error: error.message}
 }
}

export default validateForm