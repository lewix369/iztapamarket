
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton.jsx'; 

const BusinessDetailsSkeleton = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Skeleton className="h-10 w-48 mb-6" />
      <Card className="overflow-hidden shadow-lg rounded-xl">
        <Skeleton className="h-64 w-full md:h-96" /> 
        <CardContent className="p-6 md:p-8 grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-4/6" />
            <div className="space-y-2 pt-4">
              <Skeleton className="h-6 w-1/2" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4">
              <Skeleton className="aspect-square w-full" />
              <Skeleton className="aspect-square w-full" />
              <Skeleton className="aspect-square w-full hidden md:block" />
            </div>
          </div>
          <div className="md:col-span-1 space-y-6">
            <Skeleton className="h-48 w-full" />
            <Skeleton className="aspect-video w-full" />
          </div>
        </CardContent>
      </Card>
      <div className="mt-12">
        <Skeleton className="h-8 w-1/3 mb-6" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Skeleton className="h-72 w-full" />
          <Skeleton className="h-72 w-full" />
          <Skeleton className="h-72 w-full hidden lg:block" />
        </div>
      </div>
    </div>
  );
};

export default BusinessDetailsSkeleton;
