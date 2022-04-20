// вероятнее всего это костыль, но сейчас не особо времени
// возвращает функцию для удаления элемента корзины
function FuncGenerator(id: string) :  () => void {
    return () => {
        let elementId = id;
        document.getElementById(elementId)!.remove();
    }
}
export default FuncGenerator