import { useRouter } from 'next/router';
import React from 'react';
import Link from 'next/link';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';

const PaginationButtons = () => {

    const router = useRouter();

    const startIndex = Number(router.query.start) || 0;

    return (
        <div>
            
        </div>
    );
}

export default PaginationButtons;
