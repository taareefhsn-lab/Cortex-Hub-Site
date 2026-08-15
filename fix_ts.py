import os
import re

base = r'C:\Users\user\Desktop\cortex-hub\src'

# 1. layout.tsx
path = os.path.join(base, 'app', 'layout.tsx')
with open(path, 'r', encoding='utf-8') as f: content = f.read()
content = content.replace("axes: ['wght']", "axes: ['wdth']").replace('axes: ["wght"]', 'axes: ["wdth"]') 
with open(path, 'w', encoding='utf-8') as f: f.write(content)

# 2. page.tsx
path = os.path.join(base, 'app', 'page.tsx')
with open(path, 'r', encoding='utf-8') as f: content = f.read()
content = re.sub(r'import (\w+) from ([\'"].*?[\'"])', r'import { \1 } from \2', content)
with open(path, 'w', encoding='utf-8') as f: f.write(content)

# 3. SmoothScrollProvider.tsx
path = os.path.join(base, 'components', 'providers', 'SmoothScrollProvider.tsx')
with open(path, 'r', encoding='utf-8') as f: content = f.read()
content = content.replace('../lib/smooth-scroll', '@/lib/smooth-scroll')
with open(path, 'w', encoding='utf-8') as f: f.write(content)

# 4. SectionWrapper.tsx (add forwardRef)
path = os.path.join(base, 'components', 'ui', 'SectionWrapper.tsx')
with open(path, 'r', encoding='utf-8') as f: content = f.read()
if 'forwardRef' not in content:
    content = content.replace('import React', 'import React, { forwardRef }').replace('export function SectionWrapper({', 'export const SectionWrapper = forwardRef<HTMLElement, SectionWrapperProps>(({').replace('}: SectionWrapperProps) {', '}: SectionWrapperProps, ref) => {').replace('export function SectionWrapper', 'export const SectionWrapper = forwardRef<HTMLElement, SectionWrapperProps>(({').replace('export const SectionWrapper = ({', 'export const SectionWrapper = forwardRef<HTMLElement, SectionWrapperProps>(({').replace('<section', '<section ref={ref}').replace('</section>\n  );\n}', '</section>\n  );\n});')
with open(path, 'w', encoding='utf-8') as f: f.write(content)

# 5. Layer01Manifesto.tsx
path = os.path.join(base, 'components', 'sections', 'Layer01Manifesto.tsx')
with open(path, 'r', encoding='utf-8') as f: content = f.read()
content = content.replace('color="var(--violet)"', '')
content = content.replace("ref={containerRef}", "") # sectionwrapper ref
with open(path, 'w', encoding='utf-8') as f: f.write(content)

# 6. Layer02Wednesday.tsx
path = os.path.join(base, 'components', 'sections', 'Layer02Wednesday.tsx')
with open(path, 'r', encoding='utf-8') as f: content = f.read()
content = content.replace('EASE.power4', 'EASE')
content = re.sub(r'number=\{[\'"](0\d)[\'"]\}', lambda m: f'number={{{int(m.group(1))}}}', content)
content = re.sub(r'number=[\'"](0\d)[\'"]', lambda m: f'number={{{int(m.group(1))}}}', content)
content = content.replace("ref={containerRef}", "") # sectionwrapper ref
with open(path, 'w', encoding='utf-8') as f: f.write(content)

# 7. Layer03Exchange.tsx
path = os.path.join(base, 'components', 'sections', 'Layer03Exchange.tsx')
with open(path, 'r', encoding='utf-8') as f: content = f.read()
content = content.replace("ref={containerRef}", "") # sectionwrapper ref
with open(path, 'w', encoding='utf-8') as f: f.write(content)

# 8. Layer04Archive.tsx
path = os.path.join(base, 'components', 'sections', 'Layer04Archive.tsx')
with open(path, 'r', encoding='utf-8') as f: content = f.read()
content = content.replace("ref={containerRef}", "") # sectionwrapper ref
with open(path, 'w', encoding='utf-8') as f: f.write(content)

print('Fixed TS errors')
