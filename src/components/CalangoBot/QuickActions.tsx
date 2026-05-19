interface QuickActionsProps {
  onAction: (action: string) => void;
}

const ACTIONS = [
  { label: 'Ver Preços', value: 'Quero ver os preços dos serviços' },
  { label: 'Falar com Humano', value: 'Quero falar com um humano' },
  { label: 'Conhecer Serviços', value: 'Quero conhecer os serviços da CalangoFlux' },
];

export function QuickActions({ onAction }: QuickActionsProps) {
  return (
    <div className="flex flex-wrap gap-2 px-1">
      {ACTIONS.map((action) => (
        <button
          key={action.label}
          onClick={() => onAction(action.value)}
          className="rounded-full border border-accent-primary/30 bg-accent-primary/5 px-3 py-1.5 text-xs font-medium text-accent-primary transition-all hover:bg-accent-primary/10 hover:border-accent-primary/60"
        >
          {action.label}
        </button>
      ))}
    </div>
  );
}
