
import Button from './Button'

export default function Keyboard({ onButtonClick }) {
    const row1 = ['%', '+/-', 'C', 'AC']
    const row2 = ['7', '8', '9', '+']
    const row3 = ['4', '5', '6', '-']
    const row4 = ['1', '2', '3', '*']
    const row5 = ['0', '.', '=', '/']

    return (
        <div className="keyboard">
            <div className="row">{row1.map(b => <Button key={b} label={b} onClick={onButtonClick} />)}</div>
            <div className="row">{row2.map(b => <Button key={b} label={b} onClick={onButtonClick} />)}</div>
            <div className="row">{row3.map(b => <Button key={b} label={b} onClick={onButtonClick} />)}</div>
            <div className="row">{row4.map(b => <Button key={b} label={b} onClick={onButtonClick} />)}</div>
            <div className="row">{row5.map(b => <Button key={b} label={b} onClick={onButtonClick} />)}</div>
        </div>
    )
}