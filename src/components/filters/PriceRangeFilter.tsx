import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { PRICE_RANGE } from '@/lib/constants';

interface PriceRangeFilterProps {
  value: [number, number];
  onChange: (value: [number, number]) => void;
}

export function PriceRangeFilter({ value, onChange }: PriceRangeFilterProps) {
  return (
    <div className="space-y-2">
      <Label>Price Range</Label>
      <Slider
        min={PRICE_RANGE.min}
        max={PRICE_RANGE.max}
        step={10}
        value={value}
        onValueChange={onChange}
        className="mt-2"
      />
      <div className="flex justify-between text-sm text-muted-foreground">
        <span>${value[0]}</span>
        <span>${value[1]}</span>
      </div>
    </div>
  );
}