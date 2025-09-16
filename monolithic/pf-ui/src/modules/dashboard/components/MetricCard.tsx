import { Tag } from 'primereact/tag';
import type { MetricCardProps } from '../types';

const MetricCard = ({ value, label, status }: MetricCardProps) => {
    return (
        <div className="card">
            <div className="flex align-items-center justify-content-between">
                {/* Left: Number */}
                <div className="text-4xl font-bold text-primary">{value}</div>

                {/* Right: Label + optional tag */}
                <div className="flex flex-column align-items-end">
                    <span className="text-lg font-medium">{label}</span>
                    {status && <Tag value={status} severity="info" className="mt-2" />}
                </div>
            </div>
        </div>
    );
};

export default MetricCard;
