import { X, Clock } from 'lucide-react';

const ModalHeader = ({ handleClose, headerText }: {handleClose: () => void, headerText: string}) => {
  return (
    <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
        <Clock className="w-5 h-5 text-blue-600" />
        <h2 className="text-xl font-semibold">{headerText}</h2>
        </div>
        <button 
        onClick={handleClose}
        className="p-1 hover:bg-gray-100 rounded-full transition-colors"
        >
        <X className="w-5 h-5" />
        </button>
    </div>
  )
}

export default ModalHeader