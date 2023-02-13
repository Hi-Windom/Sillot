import React from 'react';

export interface DemoComponentProps {
    className?: string;
}

export const DemoComponent: React.FC<DemoComponentProps> = ({ className = '' }) => (
    <div className={className}>DemoComponent</div>
);