import React from 'react';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { MyAccordion } from '@/components/my-accordion';
import { MyDrawer } from '@/components/my-drawer';
import { MyAlert } from '@/components/my-alert';

export const App = () => {
  return (
    <div>
      <h1 className="text-2xl font-medium p-2 w-full bg-primary text-primary-foreground text-center">
        Appscript + shadcn/ui
      </h1>
      <MyAccordion />
      <div>
        <MyDrawer />
      </div>
      <div>
        <MyAlert />
      </div>
      <Switch />
      <Textarea placeholder="Type your message here." />
    </div>
  );
};
