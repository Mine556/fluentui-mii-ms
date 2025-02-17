import * as React from 'react';
import { storiesOf } from '@storybook/react';
import {
  Dialog,
  DialogActions,
  DialogBody,
  DialogContent,
  DialogSurface,
  DialogTitle,
  DialogTrigger,
} from '@fluentui/react-dialog';
import { Button } from '@fluentui/react-button';
import { Rocket24Regular } from '@fluentui/react-icons';

storiesOf('Dialog', module)
  .addStory(
    'default',
    () => (
      <Dialog open>
        <DialogTrigger>
          <Button>Open dialog</Button>
        </DialogTrigger>
        <DialogSurface>
          <DialogBody>
            <DialogTitle>Dialog title</DialogTitle>
            <DialogContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam exercitationem cumque repellendus eaque
              est dolor eius expedita nulla ullam? Tenetur reprehenderit aut voluptatum impedit voluptates in natus iure
              cumque eaque?
            </DialogContent>
            <DialogActions>
              <DialogTrigger>
                <Button appearance="secondary">Close</Button>
              </DialogTrigger>
              <Button appearance="primary">Do Something</Button>
            </DialogActions>
          </DialogBody>
        </DialogSurface>
      </Dialog>
    ),
    { includeDarkMode: true, includeHighContrast: true, includeRtl: true },
  )
  .addStory(
    'non-modal',
    () => (
      <Dialog open modalType="non-modal">
        <DialogTrigger>
          <Button>Open dialog</Button>
        </DialogTrigger>
        <DialogSurface>
          <DialogBody>
            <DialogTitle>Dialog title</DialogTitle>
            <DialogContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam exercitationem cumque repellendus eaque
              est dolor eius expedita nulla ullam? Tenetur reprehenderit aut voluptatum impedit voluptates in natus iure
              cumque eaque?
            </DialogContent>
            <DialogActions>
              <DialogTrigger>
                <Button appearance="secondary">Close</Button>
              </DialogTrigger>
              <Button appearance="primary">Do Something</Button>
            </DialogActions>
          </DialogBody>
        </DialogSurface>
      </Dialog>
    ),
    { includeDarkMode: true, includeHighContrast: true, includeRtl: true },
  )
  .addStory(
    'alert',
    () => (
      <Dialog open modalType="alert">
        <DialogTrigger>
          <Button>Open dialog</Button>
        </DialogTrigger>
        <DialogSurface>
          <DialogBody>
            <DialogTitle>Dialog title</DialogTitle>
            <DialogContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam exercitationem cumque repellendus eaque
              est dolor eius expedita nulla ullam? Tenetur reprehenderit aut voluptatum impedit voluptates in natus iure
              cumque eaque?
            </DialogContent>
            <DialogActions>
              <DialogTrigger>
                <Button appearance="secondary">Close</Button>
              </DialogTrigger>
              <Button appearance="primary">Do Something</Button>
            </DialogActions>
          </DialogBody>
        </DialogSurface>
      </Dialog>
    ),
    { includeDarkMode: true, includeHighContrast: true, includeRtl: true },
  )
  .addStory(
    'actions position start',
    () => (
      <Dialog open>
        <DialogTrigger>
          <Button>Open dialog</Button>
        </DialogTrigger>
        <DialogSurface>
          <DialogBody>
            <DialogTitle>Dialog title</DialogTitle>
            <DialogContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam exercitationem cumque repellendus eaque
              est dolor eius expedita nulla ullam? Tenetur reprehenderit aut voluptatum impedit voluptates in natus iure
              cumque eaque?
            </DialogContent>
            <DialogActions position="start">
              <DialogTrigger>
                <Button appearance="secondary">Close</Button>
              </DialogTrigger>
              <Button appearance="primary">Do Something</Button>
            </DialogActions>
          </DialogBody>
        </DialogSurface>
      </Dialog>
    ),
    { includeDarkMode: true, includeHighContrast: true, includeRtl: true },
  )
  .addStory(
    'actions position start & position end',
    () => (
      <Dialog open>
        <DialogTrigger>
          <Button>Open dialog</Button>
        </DialogTrigger>
        <DialogSurface>
          <DialogBody>
            <DialogTitle>Dialog title</DialogTitle>
            <DialogContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam exercitationem cumque repellendus eaque
              est dolor eius expedita nulla ullam? Tenetur reprehenderit aut voluptatum impedit voluptates in natus iure
              cumque eaque?
            </DialogContent>
            <DialogActions position="start">
              <DialogTrigger>
                <Button appearance="secondary">Some action</Button>
              </DialogTrigger>
            </DialogActions>
            <DialogActions position="end">
              <DialogTrigger>
                <Button appearance="secondary">Close</Button>
              </DialogTrigger>
              <Button appearance="primary">Do Something</Button>
            </DialogActions>
          </DialogBody>
        </DialogSurface>
      </Dialog>
    ),
    { includeDarkMode: true, includeHighContrast: true, includeRtl: true },
  )
  .addStory(
    'no actions',
    () => (
      <Dialog open>
        <DialogTrigger>
          <Button>Open dialog</Button>
        </DialogTrigger>
        <DialogSurface>
          <DialogBody>
            <DialogTitle>Dialog title</DialogTitle>
            <DialogContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam exercitationem cumque repellendus eaque
              est dolor eius expedita nulla ullam? Tenetur reprehenderit aut voluptatum impedit voluptates in natus iure
              cumque eaque?
            </DialogContent>
          </DialogBody>
        </DialogSurface>
      </Dialog>
    ),
    { includeDarkMode: true, includeHighContrast: true, includeRtl: true },
  )
  .addStory(
    'no title',
    () => (
      <Dialog open>
        <DialogTrigger>
          <Button>Open dialog</Button>
        </DialogTrigger>
        <DialogSurface>
          <DialogBody>
            <DialogContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam exercitationem cumque repellendus eaque
              est dolor eius expedita nulla ullam? Tenetur reprehenderit aut voluptatum impedit voluptates in natus iure
              cumque eaque?
            </DialogContent>
            <DialogActions>
              <DialogTrigger>
                <Button appearance="secondary">Close</Button>
              </DialogTrigger>
              <Button appearance="primary">Do Something</Button>
            </DialogActions>
          </DialogBody>
        </DialogSurface>
      </Dialog>
    ),
    { includeDarkMode: true, includeHighContrast: true, includeRtl: true },
  )
  .addStory(
    'no title & no actions',
    () => (
      <Dialog open>
        <DialogTrigger>
          <Button>Open dialog</Button>
        </DialogTrigger>
        <DialogSurface>
          <DialogBody>
            <DialogContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam exercitationem cumque repellendus eaque
              est dolor eius expedita nulla ullam? Tenetur reprehenderit aut voluptatum impedit voluptates in natus iure
              cumque eaque?
            </DialogContent>
          </DialogBody>
        </DialogSurface>
      </Dialog>
    ),
    { includeDarkMode: true, includeHighContrast: true, includeRtl: true },
  )
  .addStory(
    'title custom action',
    () => (
      <Dialog open>
        <DialogTrigger>
          <Button>Open dialog</Button>
        </DialogTrigger>
        <DialogSurface>
          <DialogBody>
            <DialogTitle action={<Button appearance="subtle" aria-label="fly" icon={<Rocket24Regular />} />}>
              Dialog title
            </DialogTitle>
            <DialogContent>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid, explicabo repudiandae impedit doloribus
              laborum quidem maxime dolores perspiciatis non ipsam, nostrum commodi quis autem sequi, incidunt cum?
              Consequuntur, repellendus nostrum?
            </DialogContent>
          </DialogBody>
        </DialogSurface>
      </Dialog>
    ),
    { includeDarkMode: true, includeHighContrast: true, includeRtl: true },
  )
  .addStory(
    'nested',
    () => (
      <Dialog open>
        <DialogTrigger>
          <Button>Open nested dialog</Button>
        </DialogTrigger>
        <DialogSurface as="div">
          <DialogBody>
            <DialogTitle>Dialog title</DialogTitle>
            <DialogActions>
              <Dialog open>
                <DialogTrigger>
                  <Button appearance="primary">Open inner dialog</Button>
                </DialogTrigger>
                <DialogSurface as="div">
                  <DialogBody>
                    <DialogTitle>Inner dialog title</DialogTitle>
                    <DialogContent>
                      ⛔️ just because you can doesn't mean you should have nested dialogs ⛔️
                    </DialogContent>
                    <DialogActions>
                      <DialogTrigger>
                        <Button appearance="primary">Close</Button>
                      </DialogTrigger>
                    </DialogActions>
                  </DialogBody>
                </DialogSurface>
              </Dialog>
            </DialogActions>
          </DialogBody>
        </DialogSurface>
      </Dialog>
    ),
    { includeDarkMode: true, includeHighContrast: true, includeRtl: true },
  )
  .addStory(
    'scroll long content',
    () => (
      <Dialog open>
        <DialogTrigger>
          <Button>Open dialog</Button>
        </DialogTrigger>
        <DialogSurface>
          <DialogBody>
            <DialogTitle>Dialog title</DialogTitle>
            <DialogContent>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Nisl pretium fusce id velit ut tortor. Leo vel fringilla est ullamcorper. Eget est
                lorem ipsum dolor sit amet consectetur adipiscing elit. In mollis nunc sed id semper risus in hendrerit
                gravida. Ullamcorper sit amet risus nullam eget felis eget. Dolor sed viverra ipsum nunc aliquet
                bibendum. Facilisi morbi tempus iaculis urna id volutpat. Porta non pulvinar neque laoreet suspendisse.
                Nunc id cursus metus aliquam eleifend mi in. A iaculis at erat pellentesque adipiscing commodo. Proin
                nibh nisl condimentum id. In hac habitasse platea dictumst vestibulum rhoncus est. Non tellus orci ac
                auctor augue mauris augue neque. Enim nulla aliquet porttitor lacus luctus accumsan tortor. Nascetur
                ridiculus mus mauris vitae ultricies leo integer. Ullamcorper eget nulla facilisi etiam dignissim. Leo
                in vitae turpis massa sed elementum tempus egestas sed.
              </p>
              <p>
                Ut enim blandit volutpat maecenas volutpat. Venenatis urna cursus eget nunc scelerisque viverra mauris.
                Neque aliquam vestibulum morbi blandit. Porttitor eget dolor morbi non. Nisi quis eleifend quam
                adipiscing vitae. Aliquam ultrices sagittis orci a scelerisque purus semper. Interdum varius sit amet
                mattis vulputate enim nulla aliquet. Ut sem viverra aliquet eget sit amet tellus cras. Sit amet tellus
                cras adipiscing enim eu turpis egestas. Amet cursus sit amet dictum sit amet justo donec enim. Neque
                gravida in fermentum et sollicitudin ac. Arcu cursus euismod quis viverra nibh cras pulvinar mattis
                nunc. Ultrices eros in cursus turpis massa tincidunt dui. Nisl rhoncus mattis rhoncus urna neque viverra
                justo. Odio pellentesque diam volutpat commodo sed egestas. Nunc mi ipsum faucibus vitae aliquet nec
                ullamcorper. Ipsum nunc aliquet bibendum enim. Faucibus ornare suspendisse sed nisi lacus sed. Sapien
                nec sagittis aliquam malesuada bibendum arcu vitae elementum. Metus vulputate eu scelerisque felis
                imperdiet.
              </p>
              <p>
                Consequat interdum varius sit amet mattis vulputate enim. Amet cursus sit amet dictum sit amet justo.
                Eget aliquet nibh praesent tristique magna sit. Ut consequat semper viverra nam libero justo. Pharetra
                massa massa ultricies mi. Sem viverra aliquet eget sit amet. Pulvinar mattis nunc sed blandit libero
                volutpat sed. Pharetra diam sit amet nisl suscipit adipiscing bibendum. Consectetur adipiscing elit ut
                aliquam. Volutpat diam ut venenatis tellus in metus vulputate. Scelerisque in dictum non consectetur a
                erat. Venenatis lectus magna fringilla urna porttitor rhoncus. Vitae congue mauris rhoncus aenean vel
                elit. Neque laoreet suspendisse interdum consectetur. Ultrices gravida dictum fusce ut placerat orci.
                Bibendum ut tristique et egestas quis ipsum suspendisse. Mattis rhoncus urna neque viverra justo nec
                ultrices dui. Elit duis tristique sollicitudin nibh sit amet.
              </p>
              <p>
                At risus viverra adipiscing at. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit.
                Nunc vel risus commodo viverra maecenas. Sit amet est placerat in egestas erat imperdiet sed euismod.
                Turpis egestas maecenas pharetra convallis posuere. Egestas tellus rutrum tellus pellentesque eu
                tincidunt tortor aliquam. Dolor sit amet consectetur adipiscing elit. Aliquam purus sit amet luctus
                venenatis lectus magna fringilla. Scelerisque fermentum dui faucibus in ornare quam viverra. Egestas
                maecenas pharetra convallis posuere morbi leo urna. A diam sollicitudin tempor id eu nisl nunc. Lectus
                sit amet est placerat.
              </p>
              <p>
                Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. At tellus at urna
                condimentum mattis pellentesque id nibh. Dui faucibus in ornare quam. Tincidunt id aliquet risus feugiat
                in ante metus dictum. Adipiscing commodo elit at imperdiet dui. Dolor sed viverra ipsum nunc. Sodales
                neque sodales ut etiam sit amet nisl. Hendrerit dolor magna eget est lorem ipsum dolor sit amet. Mattis
                molestie a iaculis at erat pellentesque adipiscing. Adipiscing elit duis tristique sollicitudin nibh sit
                amet commodo nulla. Fringilla urna porttitor rhoncus dolor purus.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Nisl pretium fusce id velit ut tortor. Leo vel fringilla est ullamcorper. Eget est
                lorem ipsum dolor sit amet consectetur adipiscing elit. In mollis nunc sed id semper risus in hendrerit
                gravida. Ullamcorper sit amet risus nullam eget felis eget. Dolor sed viverra ipsum nunc aliquet
                bibendum. Facilisi morbi tempus iaculis urna id volutpat. Porta non pulvinar neque laoreet suspendisse.
                Nunc id cursus metus aliquam eleifend mi in. A iaculis at erat pellentesque adipiscing commodo. Proin
                nibh nisl condimentum id. In hac habitasse platea dictumst vestibulum rhoncus est. Non tellus orci ac
                auctor augue mauris augue neque. Enim nulla aliquet porttitor lacus luctus accumsan tortor. Nascetur
                ridiculus mus mauris vitae ultricies leo integer. Ullamcorper eget nulla facilisi etiam dignissim. Leo
                in vitae turpis massa sed elementum tempus egestas sed.
              </p>
              <p>
                Ut enim blandit volutpat maecenas volutpat. Venenatis urna cursus eget nunc scelerisque viverra mauris.
                Neque aliquam vestibulum morbi blandit. Porttitor eget dolor morbi non. Nisi quis eleifend quam
                adipiscing vitae. Aliquam ultrices sagittis orci a scelerisque purus semper. Interdum varius sit amet
                mattis vulputate enim nulla aliquet. Ut sem viverra aliquet eget sit amet tellus cras. Sit amet tellus
                cras adipiscing enim eu turpis egestas. Amet cursus sit amet dictum sit amet justo donec enim. Neque
                gravida in fermentum et sollicitudin ac. Arcu cursus euismod quis viverra nibh cras pulvinar mattis
                nunc. Ultrices eros in cursus turpis massa tincidunt dui. Nisl rhoncus mattis rhoncus urna neque viverra
                justo. Odio pellentesque diam volutpat commodo sed egestas. Nunc mi ipsum faucibus vitae aliquet nec
                ullamcorper. Ipsum nunc aliquet bibendum enim. Faucibus ornare suspendisse sed nisi lacus sed. Sapien
                nec sagittis aliquam malesuada bibendum arcu vitae elementum. Metus vulputate eu scelerisque felis
                imperdiet.
              </p>
              <p>
                Consequat interdum varius sit amet mattis vulputate enim. Amet cursus sit amet dictum sit amet justo.
                Eget aliquet nibh praesent tristique magna sit. Ut consequat semper viverra nam libero justo. Pharetra
                massa massa ultricies mi. Sem viverra aliquet eget sit amet. Pulvinar mattis nunc sed blandit libero
                volutpat sed. Pharetra diam sit amet nisl suscipit adipiscing bibendum. Consectetur adipiscing elit ut
                aliquam. Volutpat diam ut venenatis tellus in metus vulputate. Scelerisque in dictum non consectetur a
                erat. Venenatis lectus magna fringilla urna porttitor rhoncus. Vitae congue mauris rhoncus aenean vel
                elit. Neque laoreet suspendisse interdum consectetur. Ultrices gravida dictum fusce ut placerat orci.
                Bibendum ut tristique et egestas quis ipsum suspendisse. Mattis rhoncus urna neque viverra justo nec
                ultrices dui. Elit duis tristique sollicitudin nibh sit amet.
              </p>
              <p>
                At risus viverra adipiscing at. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit.
                Nunc vel risus commodo viverra maecenas. Sit amet est placerat in egestas erat imperdiet sed euismod.
                Turpis egestas maecenas pharetra convallis posuere. Egestas tellus rutrum tellus pellentesque eu
                tincidunt tortor aliquam. Dolor sit amet consectetur adipiscing elit. Aliquam purus sit amet luctus
                venenatis lectus magna fringilla. Scelerisque fermentum dui faucibus in ornare quam viverra. Egestas
                maecenas pharetra convallis posuere morbi leo urna. A diam sollicitudin tempor id eu nisl nunc. Lectus
                sit amet est placerat.
              </p>
              <p>
                Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. At tellus at urna
                condimentum mattis pellentesque id nibh. Dui faucibus in ornare quam. Tincidunt id aliquet risus feugiat
                in ante metus dictum. Adipiscing commodo elit at imperdiet dui. Dolor sed viverra ipsum nunc. Sodales
                neque sodales ut etiam sit amet nisl. Hendrerit dolor magna eget est lorem ipsum dolor sit amet. Mattis
                molestie a iaculis at erat pellentesque adipiscing. Adipiscing elit duis tristique sollicitudin nibh sit
                amet commodo nulla. Fringilla urna porttitor rhoncus dolor purus.
              </p>
            </DialogContent>
            <DialogActions>
              <DialogTrigger>
                <Button appearance="secondary">Close</Button>
              </DialogTrigger>
              <Button appearance="primary">Do Something</Button>
            </DialogActions>
          </DialogBody>
        </DialogSurface>
      </Dialog>
    ),
    { includeDarkMode: true, includeHighContrast: true, includeRtl: true },
  );
