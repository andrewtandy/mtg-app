// function inputAction(): void {
//     document.addEventListener('keydown', (event: KeyboardEvent) => {
//         if(event.keyCode === 37) {
//             console.log('Left Pressed')
//             return 'left'
//         }
//         else if(event.keyCode === 39) {
//             console.log('Right Pressed')
//             return 'right'
//         }
//     })
// }

function inputAction(event:any): string {
    if(event.keyCode === 37) {
        // console.log('Left Pressed')
        return 'left'
    }
    else if(event.keyCode === 39) {
        // console.log('Right Pressed')
        return 'right'
    }

    return 'none'
}

export default inputAction 