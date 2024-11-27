import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';

interface DateRangeFilterProps {
  value: [Date | null, Date | null];
  onChange: (value: [Date | null, Date | null]) => void;
}

export function DateRangeFilter({ value, onChange }: DateRangeFilterProps) {
  const [start, end] = value;

  return (
    <div className="space-y-2">
      <Label>Date Range</Label>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-full justify-start text-left">
            <CalendarIcon className="mr-2 h-4 w-4" />
            {start && end ? (
              `${format(start, 'PP')} - ${format(end, 'PP')}`
            ) : (
              'Pick a date range'
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="range"
            selected={{
              from: start || undefined,
              to: end || undefined,
            }}
            onSelect={(range) => {
              onChange([range?.from || null, range?.to || null]);
            }}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}