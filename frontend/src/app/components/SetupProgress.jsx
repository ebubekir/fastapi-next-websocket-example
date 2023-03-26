import StepCircle from './StepCircle';

const SetupProgress = () => {

    return (
        <div className="flex space-x-2 items-center">
            <StepCircle step={1} />
            <StepCircle step={2} />
            <StepCircle step={3} withLine={false} />
        </div>
    )

}

export default SetupProgress;