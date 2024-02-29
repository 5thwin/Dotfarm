import { IconProps } from '.';

export function IcSetting({
	width = 20,
	height = 20,
	color = '#282828',
}: IconProps) {
	return (
		<svg
			width={width}
			height={width}
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M18.0625 12.2207L16.7832 11.127C16.8438 10.7559 16.875 10.377 16.875 9.99805C16.875 9.61914 16.8438 9.24023 16.7832 8.86914L18.0625 7.77539C18.159 7.69279 18.2281 7.58277 18.2605 7.45996C18.2929 7.33715 18.2872 7.20738 18.2441 7.08789L18.2266 7.03711C17.8744 6.05279 17.347 5.1403 16.6699 4.34375L16.6348 4.30273C16.5526 4.20616 16.4432 4.13673 16.3208 4.10361C16.1984 4.07049 16.0689 4.07522 15.9492 4.11719L14.3613 4.68164C13.7754 4.20117 13.1211 3.82227 12.4141 3.55664L12.1074 1.89648C12.0843 1.77157 12.0237 1.65665 11.9337 1.56699C11.8437 1.47733 11.7285 1.41718 11.6035 1.39453L11.5508 1.38477C10.5332 1.20117 9.46289 1.20117 8.44532 1.38477L8.39258 1.39453C8.26758 1.41718 8.15242 1.47733 8.06241 1.56699C7.97241 1.65665 7.91181 1.77157 7.88868 1.89648L7.58008 3.56445C6.87869 3.83013 6.22552 4.20884 5.64649 4.68555L4.04688 4.11719C3.92728 4.07489 3.79764 4.06998 3.67519 4.10312C3.55274 4.13627 3.44327 4.20589 3.36133 4.30273L3.32618 4.34375C2.6499 5.14087 2.12261 6.0532 1.76954 7.03711L1.75196 7.08789C1.66407 7.33203 1.73633 7.60547 1.9336 7.77539L3.22852 8.88086C3.16797 9.24805 3.13868 9.62305 3.13868 9.99609C3.13868 10.3711 3.16797 10.7461 3.22852 11.1113L1.9336 12.2168C1.8371 12.2994 1.76804 12.4094 1.7356 12.5322C1.70315 12.655 1.70886 12.7848 1.75196 12.9043L1.76954 12.9551C2.12305 13.9395 2.64649 14.8477 3.32618 15.6484L3.36133 15.6895C3.44347 15.786 3.55294 15.8555 3.67532 15.8886C3.7977 15.9217 3.92724 15.917 4.04688 15.875L5.64649 15.3066C6.22852 15.7852 6.87891 16.1641 7.58008 16.4277L7.88868 18.0957C7.91181 18.2206 7.97241 18.3355 8.06241 18.4252C8.15242 18.5149 8.26758 18.575 8.39258 18.5977L8.44532 18.6074C9.47224 18.792 10.5239 18.792 11.5508 18.6074L11.6035 18.5977C11.7285 18.575 11.8437 18.5149 11.9337 18.4252C12.0237 18.3355 12.0843 18.2206 12.1074 18.0957L12.4141 16.4355C13.1208 16.1706 13.7788 15.7905 14.3613 15.3105L15.9492 15.875C16.0688 15.9173 16.1985 15.9222 16.3209 15.8891C16.4434 15.8559 16.5528 15.7863 16.6348 15.6895L16.6699 15.6484C17.3496 14.8457 17.8731 13.9395 18.2266 12.9551L18.2441 12.9043C18.332 12.6641 18.2598 12.3906 18.0625 12.2207ZM15.3965 9.09961C15.4453 9.39453 15.4707 9.69727 15.4707 10C15.4707 10.3027 15.4453 10.6055 15.3965 10.9004L15.2676 11.6836L16.7266 12.9316C16.5054 13.4412 16.2262 13.9235 15.8945 14.3691L14.082 13.7266L13.4688 14.2305C13.002 14.6133 12.4824 14.9141 11.9199 15.125L11.1758 15.4043L10.8262 17.2988C10.2746 17.3613 9.71764 17.3613 9.16602 17.2988L8.81641 15.4004L8.07813 15.1172C7.52149 14.9062 7.00391 14.6055 6.54102 14.2246L5.92774 13.7188L4.10352 14.3672C3.77149 13.9199 3.49414 13.4375 3.27149 12.9297L4.7461 11.6699L4.61914 10.8887C4.57227 10.5977 4.54688 10.2969 4.54688 10C4.54688 9.70117 4.57032 9.40234 4.61914 9.11133L4.7461 8.33008L3.27149 7.07031C3.49219 6.56055 3.77149 6.08008 4.10352 5.63281L5.92774 6.28125L6.54102 5.77539C7.00391 5.39453 7.52149 5.09375 8.07813 4.88281L8.81836 4.60352L9.16797 2.70508C9.7168 2.64258 10.2773 2.64258 10.8281 2.70508L11.1777 4.59961L11.9219 4.87891C12.4824 5.08984 13.0039 5.39062 13.4707 5.77344L14.084 6.27734L15.8965 5.63477C16.2285 6.08203 16.5059 6.56445 16.7285 7.07227L15.2695 8.32031L15.3965 9.09961ZM10 6.36719C8.10157 6.36719 6.5625 7.90625 6.5625 9.80469C6.5625 11.7031 8.10157 13.2422 10 13.2422C11.8984 13.2422 13.4375 11.7031 13.4375 9.80469C13.4375 7.90625 11.8984 6.36719 10 6.36719ZM11.5469 11.3516C11.344 11.555 11.1029 11.7164 10.8374 11.8263C10.5719 11.9363 10.2873 11.9926 10 11.9922C9.41602 11.9922 8.86719 11.7637 8.45313 11.3516C8.24966 11.1487 8.08831 10.9076 7.97837 10.6421C7.86843 10.3766 7.81206 10.092 7.8125 9.80469C7.8125 9.2207 8.04102 8.67187 8.45313 8.25781C8.86719 7.84375 9.41602 7.61719 10 7.61719C10.584 7.61719 11.1328 7.84375 11.5469 8.25781C11.7503 8.4607 11.9117 8.70181 12.0216 8.96729C12.1316 9.23276 12.188 9.51735 12.1875 9.80469C12.1875 10.3887 11.959 10.9375 11.5469 11.3516Z"
				fill={color}
			/>
		</svg>
	);
}
