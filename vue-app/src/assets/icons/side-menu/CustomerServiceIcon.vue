<script setup>
    defineProps({
        stroke: {
            type: Number,
            default: 8
        }
    });
</script>

<template>
    <svg  height="100%" viewBox="0 0 86 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask id="path-1-inside-1_139_6649" fill="white">
    <rect x="0.615234" y="29.0996" width="23.4469" height="32.4649" rx="6"/>
    </mask>
    <rect x="0.615234" y="29.0996" width="23.4469" height="32.4649" rx="6" stroke="currentColor" :stroke-width="stroke*2" mask="url(#path-1-inside-1_139_6649)"/>
    <mask id="path-2-inside-2_139_6649" fill="white">
    <rect x="61.9375" y="29.0996" width="23.4469" height="32.4649" rx="6"/>
    </mask>
    <rect x="61.9375" y="29.0996" width="23.4469" height="32.4649" rx="6" stroke="currentColor" :stroke-width="stroke*2" mask="url(#path-2-inside-2_139_6649)"/>
    <path d="M12.3392 31.8041C12.3392 31.8041 12.2292 20.1223 16.1855 14.4122C19.4912 9.64128 27.6722 6.09966 30.2787 5.06199C30.8163 4.84798 31.3861 4.75 31.9647 4.75H56.6586C57.2378 4.75 57.8079 4.84801 58.3455 5.06351C60.9258 6.0979 68.9482 9.61209 71.9578 14.4122C75.5955 20.2139 74.3618 31.8041 74.3618 31.8041" stroke="currentColor" stroke-width="8"/>
    <path d="M73.6612 58.8574C73.6612 58.8574 72.6645 69.9931 68.3045 75.2235C63.1489 81.4082 49.3125 84.1079 49.3125 84.1079" stroke="currentColor" :stroke-width="stroke"/>
    <rect x="-5.65685" width="18.0001" height="18.0001" rx="5" transform="matrix(0.707107 0.707107 0.707107 -0.707107 33.309 88.9277)" stroke="currentColor" :stroke-width="stroke"/>
    </svg>
</template>