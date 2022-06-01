import create from 'zustand';
import { IAppointment } from './useTerminStore';

export interface IAuth {
    show: boolean,
    setShow: (show: boolean) => void
    showButtons: boolean,
    setShowButtons: (showButtons: boolean) => void,
    selectedTermin: IAppointment | undefined,
    setSelectedTermin: (termin: IAppointment | undefined) => void
}

const useAppointmentModal = create<IAuth>((set, get) => ({
    show: false,
    showButtons: false,
    setShowButtons: (showButtons) => {
        set((prev) => ({ showButtons }));
    },
    setShow: (show) => {
        set((prev) => ({ show }));
    },
    selectedTermin: undefined,
    setSelectedTermin: (termin) => {
        if (termin === undefined) {
            set((prev) => ({ selectedTermin: undefined }))
            set((prev) => ({ showButtons: false }));
        } else {
            set((prev) => ({ show: true }));
            set((prev) => ({ selectedTermin: termin }))
            set((prev) => ({ showButtons: true }));
        }
    }
}));

export default useAppointmentModal;
