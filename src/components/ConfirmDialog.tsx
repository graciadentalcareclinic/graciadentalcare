import React from 'react';

interface ConfirmDialogProps {
  open: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmDialog: React.FC<ConfirmDialogProps> = ({ open, onConfirm, onCancel }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-[3px]">
      <div className="bg-white rounded-xl shadow-lg p-6 max-w-xs w-full text-center">
        <div className="mb-4 text-lg font-semibold">Send WhatsApp?</div>
        <div className="mb-6 text-gray-600 text-sm">Do you want to send a WhatsApp message?</div>
        <div className="flex justify-center gap-4">
          <button className="px-4 py-2 rounded bg-sky-500 text-white font-semibold hover:bg-sky-600" onClick={onConfirm}>Yes</button>
          <button className="px-4 py-2 rounded bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300" onClick={onCancel}>No</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDialog;
