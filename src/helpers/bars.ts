import { CheckCircle, Truck, Calendar, MapPin, Shield, AlertTriangle } from 'lucide-react';

export const activeBar = 3;
export const bars = [
    { id: 1, name: 'Postal', icon: MapPin, className: 'flex items-center justify-center w-14 h-14 transition-colors text-[#0037C1] cursor-pointer hover:text-[#0037C1]' },
    { id: 2, name: 'Type of waste', icon: AlertTriangle, className: 'flex items-center justify-center w-14 h-14  transition-colors text-[#0037C1] cursor-pointer hover:text-[#0037C1]' },
    { id: 3, name: 'Skip size', icon: Truck, className: 'flex items-center justify-center w-14 h-14  transition-colors text-[#0037C1] cursor-pointer hover:text-[#0037C1]' },
    { id: 4, name: 'Check Permit', icon: Shield, className: 'flex items-center justify-center w-14 h-14  transition-colors text-white/60 cursor-not-allowed opacity-50' },
    { id: 5, name: 'Schedule Date', icon: Calendar, className: 'flex items-center justify-center w-14 h-14 transition-colors text-white/60 cursor-not-allowed opacity-50' },
    { id: 6, name: 'Payment', icon: CheckCircle, className: 'flex items-center justify-center w-14 h-14 transition-colors text-white/60 cursor-not-allowed opacity-50' },
]