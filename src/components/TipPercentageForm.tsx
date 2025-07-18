const tipOptions = [
    {
        id: 'tip-10',
        value: .10,
        label: '10%'
    },
    {
        id: 'tip-20',
        value: .20,
        label: '20%'
    },
    {
        id: 'tip-50',
        value: .50,
        label: '50%'
    },
]

type TipProps = {
    setTip: React.Dispatch<React.SetStateAction<number>>,
    tip: number
}

export const TipPercentageForm = ({ setTip, tip }: TipProps) => {
    return (
        <div className="flex flex-col mt-8 ">
            <h3 className=" text-cyan-700 text-3xl font-bold mb-2">Propina</h3>
            <form className="flex gap-3">
                {tipOptions.map((tipOption) => (
                    <div key={tipOption.id} className="flex gap-0.5 flex-row-reverse items-center">
                        <label htmlFor={tipOption.id} className=" text-xl font-semibold">
                            {tipOption.label}
                        </label>
                        <input
                            type="radio"
                            name="tip"
                            id={tipOption.id}
                            value={tipOption.value}
                            onChange={(e => setTip(+e.target.value))}
                            checked={tipOption.value === tip}
                        />
                    </div>
                ))}
            </form>
        </div >
    )
}
