import Titulo from "./titulo";

function index() {
    return <div>
        <Titulo titulo="Teste"/>
        <CapsLock name="Caio" idade="10"/>
        <CapsLock name="Jão" idade="11"/>
        <CapsLock name="Pedro" idade="12"/>
        </div>


}
function CapsLock({name, idade}) {
    //console.log(param);
    //return <div>{name} {idade?false:idade}</div>
    return <div>{name}  {idade?idade:"sem idade"}</div>
}
export default index;