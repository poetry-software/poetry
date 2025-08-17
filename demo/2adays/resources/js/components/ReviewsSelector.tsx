import { Button } from '@/components/ui/button';
import { useState } from 'react';

type ReviewType = 'all' | 'coach' | 'school';

interface ReviewsSelectorProps {
    onTypeChange?: (type: ReviewType) => void;
}

export function ReviewsSelector({ onTypeChange }: ReviewsSelectorProps) {
    const [activeType, setActiveType] = useState<ReviewType>('all');

    const types = [
        { id: 'all' as ReviewType, label: 'All Reviews' },
        { id: 'coach' as ReviewType, label: 'Coaches & Staff' },
        { id: 'school' as ReviewType, label: 'Schools' },
    ];

    const handleTypeClick = (type: ReviewType) => {
        setActiveType(type);
        onTypeChange?.(type);
    };

    return (
        <div className="flex justify-center space-x-3">
            {types.map((type) => (
                <Button
                    key={type.id}
                    variant={activeType === type.id ? 'default' : 'outline'}
                    className={` ${
                        activeType === type.id
                            ? 'border-blue-600 bg-blue-600 text-white hover:bg-blue-700'
                            : 'cursor-pointer border-gray-300 bg-white text-black hover:bg-gray-50'
                    } rounded-full px-6 py-2 text-sm font-medium transition-all duration-200`}
                    onClick={() => handleTypeClick(type.id)}
                >
                    {type.label}
                </Button>
            ))}
        </div>
    );
}
